import { ReactNode } from "react";
import { Image, Box, Text, Flex } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      bgImage="url('https://source.unsplash.com/random/1600x900')"
      bgSize="cover"
      h={[163, 400, 500]}
      p={[4, 10, 20]}
      color="gray.50"
    >
      <Box
        d="flex"
        alignItems={["center", "flex-end"]}
        justifyContent={["center", "flex-start"]}
        w="100%"
        h="100%"
      >
        <Text as="h1" fontSize={["3xl", "5xl"]} fontWeight="500">
          Europa
        </Text>
      </Box>
    </Flex>
  );
}
