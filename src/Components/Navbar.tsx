import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, Link, Stack } from '@chakra-ui/react';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Effect to add a scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled more than 0 pixels
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            as="header"
            bg={isScrolled ? 'gray.800' : 'gray.900'} // Change background color based on scroll state
            p={4}
            width="100vw"
            position="fixed"
            top={0}
            left={0}
            zIndex={1}
            transition="background-color 0.3s ease" // Smooth transition for background color
        >
            <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
                {/* Left Section: YIDU */}
                <Box>
                    <Heading as="h1" size="lg" color="yellow.400">
                        YIDU
                    </Heading>
                </Box>

                {/* Right Section: Navbar Links */}
                <Stack direction="row" h="20" align="center" spacing={6}>
                    <Link href="#home" color="white" _hover={{ color: 'yellow.300', textDecoration: 'none' }}>
                        Home
                    </Link>
                    <Link href="#about" color="white" _hover={{ color: 'yellow.300', textDecoration: 'none' }}>
                        About Me
                    </Link>
                    <Link href="#services" color="white" _hover={{ color: 'yellow.300', textDecoration: 'none' }}>
                        Services
                    </Link>
                    <Link href="#experiences" color="white" _hover={{ color: 'yellow.300', textDecoration: 'none' }}>
                        Experiences
                    </Link>
                    <Link href="#contact" color="white" _hover={{ color: 'yellow.300', textDecoration: 'none' }}>
                        Contact Me
                    </Link>
                </Stack>
            </Flex>
        </Box>
    );
};

export default Navbar;