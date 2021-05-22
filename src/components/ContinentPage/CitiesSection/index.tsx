import { ReactNode } from "react";
import { Image, Box, Text, Flex, SimpleGrid } from "@chakra-ui/react";

const citiesMock = [
  {
    name: "Londres",
    country: "Reino Unido",
    cityImage: "https://source.unsplash.com/random/256x173",
    countryImage: "/image/Ellipse.png",
  },
  {
    name: "Paris",
    country: "França",
    cityImage: "https://source.unsplash.com/random/256x173",
    countryImage: "/image/Ellipse.png",
  },
  {
    name: "Londres",
    country: "Reino Unido",
    cityImage: "https://source.unsplash.com/random/256x173",
    countryImage: "/image/Ellipse.png",
  },
  {
    name: "Paris",
    country: "França",
    cityImage: "https://source.unsplash.com/random/256x173",
    countryImage: "/image/Ellipse.png",
  },
  {
    name: "Londres",
    country: "Reino Unido",
    cityImage: "https://source.unsplash.com/random/256x173",
    countryImage: "/image/Ellipse.png",
  },
];

export function CitiesSection() {
  return (
    <Flex my={["24px"]} mx={["16px", 20]} flexDirection="column">
      <Text fontSize={24} fontWeight="medium" mt={[0, 4]}>
        Cidades +100
      </Text>
      <Flex flexDirection={["column", "row"]} flexWrap="wrap" margin="0 auto" maxW="1300px" mt={["20px", "48px"]}>
        {citiesMock.map((cityItem, i) => (
          <Box key={cityItem.name + i} w="256px" mb={["20px", "40px"]} mr={[0, 0, '45px']}>
            <Image src={cityItem.cityImage} w="100%" h="173px" />
            <SimpleGrid
              columns="2"
              borderRadius="4"
              border="1px solid #FFBA08"
              borderTop="none"
              alignItems="center"
              gridGap="24px"
              borderTopRadius="0"
              p="24px"
              pt="18px"
            >
              <Box width="100px">
                <Text fontSize={24} fontWeight="medium" mt={[0, 4]}>
                  {cityItem.name}
                </Text>
                <Text
                  fontSize={16}
                  fontWeight="normal"
                  mt="12px"
                  color="gray.300"
                >
                  {cityItem.country}
                </Text>
              </Box>
              <Image src={cityItem.countryImage} justifySelf="flex-end"/>
            </SimpleGrid>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
