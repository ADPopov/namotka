import React from 'react';
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBox = () => {
    return (
        <Box>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="teal.500" />}
                />
                <Input placeholder="Search" />
            </InputGroup>
        </Box>
    );
};

export default SearchBox;
