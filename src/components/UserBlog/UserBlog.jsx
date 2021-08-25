import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Grid} from "@chakra-ui/react";
import BlogInfo from "./BlogInfo/BlogInfo";
import BlogPosts from "./BlogPosts/BlogPosts";
import {getUser, getUserPosts} from "../../redux/UsersReducer";

const UserBlog = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUserPosts);
    console.log(user);

    useEffect(() => {
        dispatch(getUser(1))
    }, [])

    return (
        <Grid gridTemplateColumns={'1fr 2fr'}>
            {
                user != undefined ?
                    <>
                        <BlogInfo postsTotalCount='1' user={user}/>
                        <BlogPosts user={user}/>
                    </>
                    : null
            }
        </Grid>
    );
};

export default UserBlog;
