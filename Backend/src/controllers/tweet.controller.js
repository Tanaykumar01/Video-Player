import mongoose, { isValidObjectId } from "mongoose"
import {Tweet} from "../models/tweet.model.js"
import User from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const createTweet = asyncHandler(async (req, res) => {
    //TODO: create tweet
    const message = req.body;
    const { _id } = req.user;
    const user = await User.findById(_id);
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    const tweet = await Tweet.create({
        message,
        owner: _id
    });
    return res.status(201).json(
        new ApiResponse(201,
            tweet,
            "Tweet created successfully"
        )
    );
})

const getUserTweets = asyncHandler(async (req, res) => {
    // TODO: get user tweets
})

const updateTweet = asyncHandler(async (req, res) => {
    //TODO: update tweet
})

const deleteTweet = asyncHandler(async (req, res) => {
    //TODO: delete tweet
})

export {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}