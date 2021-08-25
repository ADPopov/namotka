import {posts} from "../testData/Posts";
import { api } from "../api/instance";
import {userAPI} from "../api/userAPI";

const ADD_POST = 'ADD_POST';
const SET_USER = 'SET_USER';



type Post = {
    id: number | null
    userId: number | null
    createdAt: string | null
    title: string | null
    body: string | null
    likes: number | null
}

type User = {
    createdAt: number | null
    name: number | null
    userName: string | null
    avatar: string | null
    posts: Array<Post>
}

type InitialStateType = {
    user : User | null
}

let initialState : InitialStateType = {
    user: null
}

///REDUCER///

export const UserReducer = (state = initialState, action: any) : InitialStateType => {
    switch (action.type) {
        case 'SET_USER': {
            return {
                ...state,
                user: action.user
            }
        }
        default:
            return state;
    }
}

///ACTIONS///
const setUser = (user) => ({type: 'SET_USER', user })

///SELECTORS///
export const getUserPosts = (state) => state.user.user;

///THUNK///
export const getUser = (userID : number) => async (dispatch : any) => {
    const response = await userAPI.getUserByID(userID);
    return dispatch(setUser(response.data))
}
