import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar'; 
import HeroSection from './Section/HeroSection'; 
import AboutMeSection from './Section/AboutMeSection'; 
import ServicesSection from './Section/ServicesSection';
const Home: React.FC = () => {
    return (
        <Box>
            <Navbar />
            <HeroSection />
            <AboutMeSection />
            <ServicesSection />
        </Box>
    );
};

export default Home;