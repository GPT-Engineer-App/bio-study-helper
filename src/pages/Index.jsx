import { Container, Text, VStack, Heading, Box, Image, Link } from "@chakra-ui/react";
import { FaBook, FaMicroscope, FaLeaf } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Year 11 Preliminary Biology</Heading>
        <Text fontSize="lg" textAlign="center">Welcome to your study resource for Year 11 Preliminary Biology. Here you'll find notes, diagrams, and interactive content to help you excel in your studies.</Text>
        
        <Box boxSize="sm">
          <Image src="/images/biology.jpg" alt="Biology" borderRadius="md" />
        </Box>
        
        <VStack spacing={4} align="stretch">
          <Link href="#" fontSize="xl" display="flex" alignItems="center">
            <FaBook style={{ marginRight: '8px' }} />
            Study Notes
          </Link>
          <Link href="#" fontSize="xl" display="flex" alignItems="center">
            <FaMicroscope style={{ marginRight: '8px' }} />
            Interactive Diagrams
          </Link>
          <Link href="#" fontSize="xl" display="flex" alignItems="center">
            <FaLeaf style={{ marginRight: '8px' }} />
            Practice Questions
          </Link>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;