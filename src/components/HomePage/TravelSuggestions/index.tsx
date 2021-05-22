import {
  Grid,
  Circle,
  Text,
  Box,
  Divider,
  Center,
  Image,
} from "@chakra-ui/react";

const infosMock = [
  { title: "vida noturna", iconUrl: "/image/cocktail.png" },
  { title: "praia", iconUrl: "/image/surf.png" },
  { title: "moderno", iconUrl: "/image/building.png" },
  { title: "clássico", iconUrl: "/image/museum.png" },
];

export function TravelSuggestions() {
  return (
    <>
      <Grid
        maxWidth={1360}
        margin="0 auto"
        mt={[0, 10, 20]}
        templateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]}
        gap={6}
        padding={10}
        justifyContent="center"
      >
        {infosMock.map((infoItem, i) => (
          <Box
            key={infoItem.title + i}
            display="flex"
            flexDirection={["row", "column"]}
            alignItems="center"
            justifySelf="center"
          >
            <Image
              src={infoItem.iconUrl}
              display={["none", "none", "initial"]}
            />
            <Circle
              size="8px"
              bg="#FFBA08"
              marginRight={2}
              display={["initial", "initial", "none"]}
            />
            <Text fontSize={18} fontWeight="semibold" mt={[0, 4]}>
              {infoItem.title}
            </Text>
          </Box>
        ))}

        <Box
          display="flex"
          alignItems="center"
          flexDirection={["row", "column"]}
          gridColumn={["1/3", "initial"]}
          justifyContent="center"
        >
          <Image src="/image/earth.png" display={["none", "none", "initial"]} />
          <Circle
            size="8px"
            bg="#FFBA08"
            marginRight={2}
            display={["initial", "initial", "none"]}
          />
          <Text fontWeight="semibold" fontSize={18} mt={[0, 4]}>
            e mais...
          </Text>
        </Box>
      </Grid>
      <Center>
        <Divider width="60px" borderColor="gray.600" borderBottomWidth="2px" />
      </Center>
    </>
  );
}
