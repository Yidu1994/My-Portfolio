import { Box, Heading, Text, Flex, Button, Stack } from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react';

const AboutMeSection: React.FC = () => {
    const [isInView, setIsInView] = useState(false); // State to track if the section is in view
    const aboutMeRef = useRef<HTMLDivElement>(null); // Ref to track the AboutMeSection

    // Detect when the AboutMeSection is in view
    useEffect(() => {
        const handleScroll = () => {
            if (aboutMeRef.current) {
                const rect = aboutMeRef.current.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
                setIsInView(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box
            id="about" // Add an id for the Navbar link to target
            bg="gray.900"
            minH="100vh"
            height="100vh"
            display="flex"
            position="relative"
            alignItems="center"
            overflow="hidden"
            justifyContent="center"
            ref={aboutMeRef} 
        >
            <Flex
                justify="center" 
                align="center"   
                gap={150}        
                bg="gray.900"
                position="relative"
                zIndex={1}
            >
                <Box>
                    <Heading
                        as="h1"
                        size="80px"
                        color="white"
                        mb={4}
                        fontSize="80px" 
                        fontWeight="bold" 
                        fontStyle="italic" 
                        position="relative"
                        _after={{
                            content: '""',
                            position: 'absolute',
                            left: '0',
                            bottom: '-5px', 
                            width: isInView ? '50%' : '0%', 
                            height: '6px', 
                            bg: 'yellow.400',
                            transition: 'width 0.8s ease', 
                        }}
                    >
                        About Me
                    </Heading>
                </Box>
                 
                <Stack spacing={10}>
                    <Box>
                    <Text as="p" fontSize="15" color="gray.100" lineHeight="tall" fontWeight="bold" fontStyle="italic">
                        I’m a fifth-year Software Engineering student specializing in React web development.
                    </Text>
                    <Text as="p" fontSize="15" color="gray.100" fontWeight="bold" fontStyle="italic">
                        I enjoy creating responsive and user-friendly applications.
                    </Text>
                    <Text as="p" fontSize="15" color="gray.100" fontWeight="bold" fontStyle="italic">
                        Additionally, my experience during my internship as a QA Analyst has sharpened
                    </Text>
                    <Text as="p" fontSize="15" color="gray.100" fontWeight="bold" fontStyle="italic">
                        my attention to detail and problem-solving skills.
                    </Text>
                    <Text as="p" fontSize="15" color="gray.100" fontWeight="bold" fontStyle="italic">
                        I’m passionate about technology and excited to contribute to innovative projects.
                    </Text>
                    <Text as="p" fontSize="15" color="gray.100" fontWeight="bold" fontStyle="italic">
                        Let’s connect!
                    </Text>
                    </Box>
                                <Button
                                        colorScheme="green"
                                        fontWeight="bold"
                                        variant="outline"
                                        width={{ base: '150px', md: '200px', lg: '250px' }} 
                                        height={{ base: '50px', md: '60px', lg: '70px' }} 
                                        fontSize={{ base: '16px', md: '20px', lg: '24px' }} 
                                        _hover={{ bg: 'yellow.500' }}
                                        _active={{ bg: 'yellow.400' }}
                                    >
                                        Download CV
                                    </Button>
                </Stack>
                
            </Flex>
        </Box>
    );
};

export default AboutMeSection;