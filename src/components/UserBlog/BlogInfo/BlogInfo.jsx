import React from 'react';

import { Box, Button, Divider, Flex, Image, useDisclosure, Avatar } from '@chakra-ui/react';
import NewPostPage from '../NewPostPage/NewPostPage';

export const AboutUser = ({name, userName, avatar }) => {
    return(
        <Box>
            <Avatar

                borderRadius="full"
                boxSize="150px"
                src={avatar}
                alt="Alexander Popov"
            />
            <Box
                mt="2"
                fontWeight="extrabold"
                fontSize={22}
            >
                {name}
            </Box>
            <Box
                fontWeight="medium"
                fontSize={22}
                color={'gray.500'}
            >
                @{userName}
            </Box>
        </Box>
    )
}

const BlogInfo = ({ postsTotalCount, user }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box minW={'300px'}>
            <AboutUser name={user.name} avatar={user.avatar} userName={user.userName} />
            <NewPostPage isOpen={isOpen} onClose={onClose} />
            <Button
                mt={2}
                colorScheme="teal"
                size="sm"
                onClick={() => onOpen()}
            >
                New post
            </Button>
            <Flex pt={2} fontSize={17}>
                <Box pr={2} color={'gray.500'}><b>0</b> following</Box>
                <Box pr={2} color={'gray.500'}><b>0</b> following</Box>
                <Box color={'gray.500'}><b>{postsTotalCount}</b> posts</Box>
            </Flex>
            <Divider pt={3} w="90%" />

        </Box>
    )
}

export default BlogInfo;
