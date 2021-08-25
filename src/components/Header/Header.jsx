import React from 'react';
import {
    Box,
    Button,
    Menu,
    Center,
    Divider,
    MenuButton,
    Flex,
    Heading,
    MenuDivider,
    MenuList,
    MenuItem,
    MenuGroup,
    useDisclosure,
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons'

import { BsPlusCircle, CgFeed } from 'react-icons/all';
import { VscAccount } from 'react-icons/vsc';

import { ColorModeSwitcher} from "../assets/ColorModeSwitcher";
import AccountSettings from "../AccountSettings/AccountSettings";
import NewPostPage from "../UserBlog/NewPostPage/NewPostPage";

const ProfileMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Menu placement={"bottom-end"}>
                <MenuButton p={0} m={0} ml={'2px'} as={Button} variant="ghost">
                    <Center>
                        <VscAccount size="20" />
                    </Center>
                </MenuButton>
                <MenuList zIndex={9999}>
                    <MenuGroup>
                        <MenuItem onClick={onOpen} icon={<Center><SettingsIcon/></Center>}>Settings</MenuItem>
                        <MenuDivider/>
                        <MenuItem>Log Out</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
            <AccountSettings onClose={onClose} isOpen={isOpen}/>
        </>
    )
}

const NavigationBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
            <NewPostPage isOpen={isOpen} onClose={onClose} />
            <Flex alignItems={'center'}>
                <Button as="a" variant="ghost" p={0} href="#" onClick={() => onOpen()}>
                    <BsPlusCircle size="20" />
                </Button>
                <Center height="50px" w="5px" >
                    <Divider
                        colorScheme={'yellow'}
                        size={'xl'}
                        orientation="vertical"
                    />
                </Center>
                <Button as="a" variant="ghost" ml={'2px'} p={0} href="#">
                    <CgFeed size="20" />
                </Button>
                <Box>
                    <ProfileMenu />
                </Box>
                <ColorModeSwitcher ml={'2px'}/>
            </Flex>
        </>

    )
}

const Header = ({ isAuth }) => {
    return (
        <>
            <Box pb={5}>
                <Flex justify={'space-between'}
                      alignItems={'center'}
                      pt={2}
                      pb={2}>
                    <Heading as={'a'} href={'#'} size={'md'} fontWeight="bold">
                        NAMOTKA
                    </Heading>
                    <Box>
                        {isAuth ? (
                            <NavigationBar />
                        ) : (
                            <Box>
                                <Button
                                    colorScheme="teal"
                                    fontSize={14}
                                    variant={'outline'}
                                    mr="4"
                                >
                                    Log In
                                </Button>
                                <Button colorScheme="orange" fontSize={14} mr="4">
                                    Sign Up
                                </Button>
                                <ColorModeSwitcher />
                            </Box>
                        )}
                    </Box>
                </Flex>
                <Divider />
            </Box>
        </>
    );
};

export default Header;
