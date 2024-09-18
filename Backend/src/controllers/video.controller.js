import mongoose, {isValidObjectId} from "mongoose"
import Video from "../models/video.model.js"
import User from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import { uploadResult } from "../utils/cloundinary.js";


const getAllVideos = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
    //TODO: get all videos based on query, sort, pagination
})

const publishAVideo = asyncHandler(async (req, res) => {
    const { title, description} = req.body
    if(title === "" || description === ""){
        throw new ApiError(400, "Title and description are required")
    }
    const videoFile = req.files?.videoFile
    const thumbnail = req.files?.thumbnail
    if(!videoFile || !thumbnail){
        throw new ApiError(400, "Video file and thumbnail are required")
    }
    try {
        const { _id } = req.user
        const user = await User.findById(_id)
        if(!user){
            throw new ApiError(404, "User not found")
        }
        const videoFileMetadata = await uploadResult(videoFile[0]?.path);
        const thumbnailMetadata = await uploadResult(thumbnail[0]?.path);
        
        const videoFileUrl = videoFileMetadata.secure_url; // Extract the URL
        const thumbnailUrl = thumbnailMetadata.secure_url; // Extract the URL
        const video = await Video.create({
            videoFile : videoFileUrl,
            thumbnail : thumbnailUrl,
            owner : _id,
            title,
            description,
            duration : videoFileMetadata.duration
            // views : 0,
            // isPublished : false
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
})

const updateVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: update video details like title, description, thumbnail

})

const deleteVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: delete video
})

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params
})

export {
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
}