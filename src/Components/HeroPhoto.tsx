import React, { useState, useEffect } from 'react';
import Mine from '../assets/Mine.png';
import { Box, Flex, Heading, Text, Button, Image, Stack } from '@chakra-ui/react';

const HeroPhoto: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    
    const headerStyle = {
        top: `${200 - scrollY * 0.5}px`, 
        opacity: `${1 - scrollY / 500}`, 
    };

    const imageStyle = {
        transform: `scale(${1 - scrollY / 1000})`, 
    };
    return (
        <Box bg="gray.900" minH="100vh" height="100vh" display="flex" position="relative" alignItems="center" overflow="hidden" justifyContent="center">
            <Box as="header" p={12} width="100vw" position="fixed"  style={headerStyle} top={200} left={0} zIndex={1002}>
                <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
                    <Box>
            <Heading as="h1" fontSize="80px" fontWeight="bold" fontStyle="italic" color="white" mb={4}> 
                I'm Yididiya
            </Heading>

            <Stack spacing={10}> 
                <Box>
                    <Text as="p" fontSize="30" color="gray.100" lineHeight="tall" fontWeight="bold" fontStyle="italic">
                        Front-End Web{' '}
                        <Text as="span" color="yellow.400">
                            DEVELOPER
                        </Text>
                    </Text>
                    <Text as="p" fontSize="30" color="gray.100" fontWeight="bold" fontStyle="italic">
                        & QA Analyst
                    </Text>
                    </Box>

                <Button
                    colorScheme="yellow"
                    fontWeight="bold"
                    width={{ base: '150px', md: '200px', lg: '250px' }} 
                    height={{ base: '50px', md: '60px', lg: '70px' }} 
                    fontSize={{ base: '16px', md: '20px', lg: '24px' }} 
                    _hover={{ bg: 'yellow.700' }}
                    _active={{ bg: 'yellow.400' }}
                >
                    Hire Me
                </Button>
            </Stack>
        </Box>

                    
                    <Flex gap={4} align="right">
                        <Image
                            src={Mine}
                            alt="my profile"
                            style={imageStyle}
                            transition="background 1s ease-in-out"
                            w={{ base: '120px', md: '200px', lg: '400px' }}
                            h={{ base: '200px', md: '200px', lg: '400px' }}
                            sx={{
                                border: 'Ghost', 
                                borderRadius: '150', 
                            }}
                        />
                    </Flex>
                    
                </Flex>
            </Box>
        </Box>
    );
};

export default HeroPhoto;