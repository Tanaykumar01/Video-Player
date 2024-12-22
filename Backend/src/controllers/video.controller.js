import mongoose, { isValidObjectId } from "mongoose"
import Video from "../models/video.model.js"
import User from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { uploadResult } from "../utils/cloundinary.js";


const getAllVideos = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
    let filter = {};

    // If a search query is provided, filter by title or description
    if (query) {
        filter.$or = [
            { title: { $regex: query, $options: 'i' } },        // case-insensitive search for title
            { description: { $regex: query, $options: 'i' } }   // case-insensitive search for description
        ];
    }

    // If a userId is provided, filter videos by that user
    if (userId) {
        filter.user = userId;
    }

    // Sorting: sortType should either be 'asc' for ascending or 'desc' for descending
    let sortOptions = {};
    sortOptions[sortBy] = sortType === 'asc' ? 1 : -1;

    try {
        // Fetch videos with pagination, query, and sort
        const videos = await Video.find(filter)
            .sort(sortOptions)                       // Apply sorting
            .skip((page - 1) * limit)                // Skip for pagination
            .limit(parseInt(limit));                 // Limit number of results

        // Get the total count of videos that match the filter for pagination info
        const totalVideos = await Video.countDocuments(filter);

        res.status(200).json(
            new ApiResponse(200,
                {

                    success: true,
                    data: videos,
                    page: parseInt(page),
                    totalPages: Math.ceil(totalVideos / limit),
                    totalVideos: totalVideos,
                },
                "Videos fetched successfully"
            )
        );
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching videos.",
            error: error.message
        });
    }
    //TODO: get all videos based on query, sort, pagination
})

const publishAVideo = asyncHandler(async (req, res) => {
    const { title, description } = req.body
    if (title === "" || description === "") {
        throw new ApiError(400, "Title and description are required")
    }
    const videoFile = req.files?.videoFile
    const thumbnail = req.files?.thumbnail
    if (!videoFile || !thumbnail) {
        throw new ApiError(400, "Video file and thumbnail are required")
    }
    try {
        const { _id } = req.user
        const user = await User.findById(_id)
        if (!user) {
            throw new ApiError(404, "User not found")
        }
        const videoFileMetadata = await uploadResult(videoFile[0]?.path);
        const thumbnailMetadata = await uploadResult(thumbnail[0]?.path);

        const videoFileUrl = videoFileMetadata.secure_url; // Extract the URL
        const thumbnailUrl = thumbnailMetadata.secure_url; // Extract the URL
        const video = await Video.create({
            videoFile: videoFileUrl,
            thumbnail: thumbnailUrl,
            owner: _id,
            title,
            description,
            duration: videoFileMetadata.duration,
            views: 0,
            isPublished: true
        })
        return res.status(201).json(
            new ApiResponse(201,
                video,
                "Video Published Successfully"
            )
        )
    } catch (error) {
        throw new ApiError(500, error.message)
    }
    // TODO: get video, upload to cloudinary, create video
})

const getVideoById = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: get video by id
    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid video id")
    }
    const video = await Video.findById(videoId)
    if (!video) {
        throw new ApiError(404, "Video not found")
    }
    res.status(200).json(
        new ApiResponse(200,
            video,
            "Video fetched successfully"
        )
    )
})

const updateVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    const { title, description } = req.body
    if(!title || !description){
        throw new ApiError(400, "Title and description are required")
    }
    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid video id")
    }
    const thumbnail = req.files?.thumbnail
    if(!thumbnail){
        throw new ApiError(400, "Thumbnail is required")
    }
    const thumbnailMetadata = await uploadResult(thumbnail[0]?.path);
    const thumbnailUrl = thumbnailMetadata.secure_url; // Extract the URL

    const video = await Video.findById(videoId)
    if (!video) {
        throw new ApiError(404, "Video not found")
    }
    video.title = title;
    video.description = description;
    video.thumbnail = thumbnailUrl;
    await video.save();
    res.status(200).json(
        new ApiResponse(200,
            video,
            "Video updated successfully"
        )
    )
    //TODO: update video details like title, description, thumbnail

})

const deleteVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: delete video
})

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    const video = await Video.findById(videoId)
    if (!video) {
        throw new ApiError(404, "Video not found")
    }
    video.isPublished = !video.isPublished
    await video.save()
    res.status(200).json(
        new ApiResponse(200,
            video,
            "Publish status updated successfully"
        )
    )
})

export {
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
}