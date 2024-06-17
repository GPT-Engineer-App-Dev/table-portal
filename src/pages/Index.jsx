import { Container, Text, VStack, Heading, Box, Image, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Table World</Heading>
        <Text fontSize="lg">Discover the beauty and functionality of tables.</Text>
        <Box boxSize="sm">
          <Image src="/images/table.jpg" alt="Beautiful table" />
        </Box>
        <Flex direction="column" align="center" justify="center" p={10}>
          <Heading size="lg" mb={4}>Why Tables?</Heading>
          <Text fontSize="md" mb={6}>Tables are essential pieces of furniture that serve a variety of purposes. From dining tables to coffee tables, they are central to our daily lives.</Text>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;