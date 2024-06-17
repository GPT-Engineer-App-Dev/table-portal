import { useEffect, useState } from "react";
import { Container, Text, VStack, Heading, Box, Image, Flex, Spinner } from "@chakra-ui/react";
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "YOUR_UNSPLASH_ACCESS_KEY",
});

const Index = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    unsplash.search
      .getPhotos({ query: "table", perPage: 5 })
      .then((result) => {
        setImages(result.response.results);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch images from Unsplash");
        setLoading(false);
      });
  }, []);
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Table World</Heading>
        <Text fontSize="lg">Discover the beauty and functionality of tables.</Text>
        {loading && <Spinner size="xl" />}
        {error && <Text color="red.500">{error}</Text>}
        <Box boxSize="sm">
          {images.map((image) => (
            <Image key={image.id} src={image.urls.small} alt={image.alt_description} mb={4} />
          ))}
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