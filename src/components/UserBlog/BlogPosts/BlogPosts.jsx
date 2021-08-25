import React, {useEffect} from 'react';
import { Flex, Heading, Stack } from '@chakra-ui/react';
import SearchBox from "../../assets/SearchBox/SearchBox";
import Post from './Post/Post';

const FeedHeader = () => {
    return (
        <Flex justifyContent={'space-between'}>
            <Heading fontSize={30} color={'teal.500'}>
                My posts
            </Heading>
            <SearchBox />
        </Flex>
    );
};

const BlogPosts = ({user}) => {
    return (
        <Stack spacing={5}>
            <FeedHeader />
            {
                [...user.posts].reverse().map(post => (
                <Post key={post.id} postID={post.id} title={post.title} body={post.body}  />
            ))}
        </Stack>
    );
};

export default BlogPosts;
