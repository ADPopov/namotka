import React from "react";
import {
    Avatar,
    Box,
    Button,
    Center,
    Container,
    Divider,
    Flex,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Spacer,
    Stack
} from "@chakra-ui/react";
import {AiOutlineArrowUp} from "react-icons/ai";
import NewPostForm from "./NewPostForm/NewPostForm";
import { CloseIcon } from "@chakra-ui/icons";

const NewPostPage = ({isOpen, onClose}) => {
    return (
        <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
            <ModalOverlay/>
            <ModalContent>
                <Flex p={2} mr={4} ml={1}>

                    <Spacer/>
                    <Button _focus={{borderColor: 'transparent'}}
                            borderRadius={'full'}
                            colorScheme="teal"
                            type={'reset'}
                            type="submit"
                            form={'createPostForm'}
                            p={0} bg={'teal.500'}
                            variant={'solid'}
                            onClick={() => {
                                onClose()
                            }}
                    >
                        <AiOutlineArrowUp fontSize={'20px'}/>
                    </Button>
                    <Button _focus={{borderColor: 'transparent'}}
                            borderRadius={'full'}
                            p={0}  ml={2}
                            variant={'ghost'}

                            onClick={() => {
                                onClose()
                            }}
                    >
                        <CloseIcon fontSize={'14px'}/>
                    </Button>
                </Flex>
                <Divider/>
                <ModalBody zIndex={1}>
                    <Container maxW={"container.lg"}
                               zIndex={2}
                               mt='40px'>
                        <Stack spacing="24px">
                            <NewPostForm/>
                        </Stack>
                    </Container>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default NewPostPage;
