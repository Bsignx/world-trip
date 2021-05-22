import { ReactNode } from "react";
import { Image, Box, Text, Flex } from "@chakra-ui/react";

export function Hero() {
  return (
    <Flex
      bgImage="url('/image/Background.jpg')"
      bgSize="cover"
      h={[163, 335]}
      p={[4, 10, 20]}
      color="gray.50"
      justifyContent="space-around"
    >
      <Box>
        <Text as="h1" fontSize={["2xl", "4xl"]} fontWeight="500">
          5 Continentes, <br /> infinitas possibilidades.
        </Text>
        <Text fontSize="sm" mt="2" fontWeight="400" color="gray.200">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
        </Text>
      </Box>
      <Image src="/image/Airplane.svg" display={['none', 'initial']} w={[0,0, 300, 420]} h={["270px"]} mt={[0, 0, 35, 15]} />
    </Flex>
  );
}
