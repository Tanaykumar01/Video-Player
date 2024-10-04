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
    const { _id } = req.user;
    const user = await User.findById(_id);
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    const tweets = await Tweet.find({ owner: _id });
    return res.status(200).json(
        new ApiResponse(200,
            tweets,
            "Tweets fetched successfully"
        )
    );
})

const updateTweet = asyncHandler(async (req, res) => {
    //TODO: update tweet
    const { tweetId } = req.params;
    const message = req.body;
    if (!isValidObjectId(tweetId)) {
        throw new ApiError(400, "Invalid tweet id");
    }
    const tweet = await Tweet.findById(tweetId);
    if (!tweet) {
        throw new ApiError(404, "Tweet not found");
    }
    tweet.message = message;
    await tweet.save();
    return res.status(200).json(
        new ApiResponse(200,
            tweet,
            "Tweet updated successfully"
        )
    );
})

const deleteTweet = asyncHandler(async (req, res) => {
    //TODO: delete tweet
    const { tweetId } = req.params;
    if (!isValidObjectId(tweetId)) {
        throw new ApiError(400, "Invalid tweet id");
    }
    const tweet = await Tweet.findById(tweet);
    if (!tweet) {
        throw new ApiError(404, "Tweet not found");
    }
    await tweet.delete();
    return res.status(200).json(
        new ApiResponse(200,
            null,
            "Tweet deleted successfully"
        )
    );
})

export {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}