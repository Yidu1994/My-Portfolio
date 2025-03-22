import React from 'react';
import HeroPhoto from '../Components/HeroPhoto'; 
import { Box } from '@chakra-ui/react'; 

const HeroSection: React.FC = () => {
    return (
        <Box>
            <HeroPhoto />
        </Box>
    );
};

export default HeroSection;