import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    Button,
    ModalCloseButton,
    ModalBody,
} from '@chakra-ui/react';
import { AboutUser } from '../UserBlog/BlogInfo/BlogInfo';

const AccountSettings = ({onClose, isOpen}) => {
    return(
        <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent pt={4}>
                <ModalCloseButton />
                <ModalBody>
                    <AboutUser />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                    <Button onClick={onClose} colorScheme={'teal'} variant={'solid'} ml={3}>Save</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default AccountSettings;
