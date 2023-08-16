import { Box, Flex, Text, Link } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box as="footer" bg="#2e1f37" color="white" py={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <Box flex="1">
          <Text fontSize="lg"></Text>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 2</Link>
          {/* Add more links or content */}
        </Box>
        <Box flex="1">
          <Text fontSize="lg">Column 2</Text>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 2</Link>
          {/* Add more links or content */}
        </Box>
        <Box flex="1">
          <Text fontSize="lg">Column 3</Text>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 2</Link>
          {/* Add more links or content */}
        </Box>
        <Box flex="1">
          <Text fontSize="lg">Column 4</Text>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 2</Link>
          {/* Add more links or content */}
        </Box>
        <Box flex="1">
          <Text fontSize="lg">Column 5</Text>
          <Link href="#">Link 1</Link>
          <Link href="#">Link 2</Link>
          {/* Add more links or content */}
           
        </Box>
      </Flex>
    </Box>
  );
};
