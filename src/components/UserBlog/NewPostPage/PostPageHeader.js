import React from "react";
import {Avatar, Box, Button, Center} from "@chakra-ui/react";

export const PostPageHeader = ({type, onClose}) => {
    return(
        <Center>
            <Button as={'button'}
                    colorScheme={'Gray'}
                    variant={'ghost'}
                    borderColor={'transparent'}
                    _focus={{
                        borderColor: 'transparent'
                    }}
                    onClick={() => {
                        onClose()
                    }}
            >
                <Center>
                    <Avatar size="sm" name="Dan Abrahmov"
                            src="https://img1.teletype.in/files/c6/cf/c6cf15b5-534e-4519-a6ac-f26a67332565.jpeg"/>
                </Center>
                <Box ml={2}>
                    <Center>Alexander Popov</Center>
                </Box>
            </Button>
        </Center>
    )
}
