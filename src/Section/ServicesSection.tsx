import { Box, Heading, Text, Flex, Stack } from '@chakra-ui/react';

const ServicesSection: React.FC = () => {
    return (
        <Box
            id="services" // Add an id for the Navbar link to target
            bg="gray.900"
            minH="100vh"
            height="100vh"
            display="flex"
            position="relative"
            alignItems="center"
            overflow="hidden"
            justifyContent="center"
        >
            <Flex
                direction="column" // Stack items vertically
                justify="center"
                align="center"
                gap={50} // Add spacing between heading and services list
                bg="gray.900"
                position="relative"
                zIndex={1}
                maxW="1200px"
                mx="auto"
                px={4}
            >
                {/* Top Section: Services Heading */}
                <Box textAlign="center"> {/* Center the heading */}
                    <Heading
                        as="h1"
                        size="2xl"
                        color="white"
                        mb={8}
                        fontSize="80px"
                        fontWeight="bold"
                        fontStyle="italic"
                        position="relative"
                        _after={{
                            content: '""',
                            position: 'absolute',
                            left: '50%',
                            bottom: '-10px',
                            width: '50%',
                            height: '6px',
                            bg: 'yellow.400',
                            transform: 'translateX(-50%)', // Center the underline
                        }}
                    >
                        Services
                    </Heading>
                </Box>

                {/* Bottom Section: Services List */}
                <Box>
                    <Stack spacing={6}>
                        <Box textAlign="center"> {/* Center each service */}
                            <Heading as="h2" size="lg" color="yellow.400" mb={2}>
                                Web Development
                            </Heading>
                            <Text fontSize="15" color="gray.100" fontWeight="bold" fontStyle="italic">
                                I specialize in building responsive, user-friendly websites using modern technologies like React, Next.js, and Chakra UI.
                            </Text>
                        </Box>

                        <Box textAlign="center"> {/* Center each service */}
                            <Heading as="h2" size="lg" color="yellow.400" mb={2}>
                                QA Analysis
                            </Heading>
                            <Text fontSize="15" color="gray.100" fontWeight="bold" fontStyle="italic">
                                With experience in QA analysis, I ensure that applications are bug-free, performant, and meet user requirements.
                            </Text>
                        </Box>

                        <Box textAlign="center"> {/* Center each service */}
                            <Heading as="h2" size="lg" color="yellow.400" mb={2}>
                                UI/UX Design
                            </Heading>
                            <Text fontSize="15" color="gray.100" fontWeight="bold" fontStyle="italic">
                                I create intuitive and visually appealing designs that enhance user experience and engagement.
                            </Text>
                        </Box>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    );
};

export default ServicesSection;