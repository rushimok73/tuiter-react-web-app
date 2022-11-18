import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./tuits-service"

const currentUser = {
    "userName": "NASA",
    "handle": "nasa",
    "displayPicture": "/images/nasa.jpeg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "disliked": false,
    "dislikes": 0
}

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findTuits()
)
export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    })


export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit', async (tuit) => {
        tuit = {
            ...tuit,
            ...templateTuit
        }
        return await service.createTuit(tuit)
    }
);

export const updateTuitThunk =
    createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) =>
        await service.updateTuit(tuit)
);

