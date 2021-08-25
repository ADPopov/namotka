import React from 'react';
import { Box, Heading, Stack, Text, useColorMode } from '@chakra-ui/react';

const Post = ({ title, body, postID}) => {
    const { colorMode } = useColorMode();
    return (
        <Stack onClick={() => {
            console.log('CLICK', postID)}}
            border={'1px'}
            p={5}
            borderRadius={10}
            borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
            transition={'0.3s ease-in-out'}
            _hover={{
                borderColor: colorMode === 'dark' ? 'gray.400' : 'gray.500',
                cursor: 'pointer',
            }}
        >
            <Heading fontSize={26}>{title}</Heading>
            <Box noOfLines={8} fontSize={18} as={'a'}>
                {body}
            </Box>
            <Text color={'gray.400'}>Today, 5:21 pm</Text>
        </Stack>
    );
};

export default Post;
