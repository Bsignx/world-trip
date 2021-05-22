import { ReactNode } from "react";
import { Image, Box, Text, Flex, Tooltip } from "@chakra-ui/react";

const continentMock = [
  { title: "50", subtitle: "países" },
  { title: "60", subtitle: "línguas" },
  {
    title: "24",
    subtitle: "cidades +100",
    info: [
      "São Paulo",
      "Rio de Janeiro",
      "Belo Horizonte",
      "Brasília",
      "Salvador",
      "Fortaleza",
      "Curitiba",
      "Manaus",
      "Vitória",
      "Recife",
      "Porto Alegre",
      "Goiânia",
      "Belém",
      "Guarulhos",
      "Vila Velha",
      "Campinas",
      "São Luís",
      "Maceió",
      "São Vicente",
      "Divinópolis",
      "Araçatuba",
      "Santa Bárbara d’Oeste",
      "Cachoeiro de Itapemirim",
      "Rio Grande",
      "Arapiraca",
    ],
  },
];

export function ContinentDescription() {
  return (
    <Flex
      my={["24px"]}
      mx={["16px", 20]}
      flexDirection={["column", "column", "row"]}
      alignItems={["initial", "center"]}
    >
      <Text
        fontSize={["14px", "16px", "18px", "24px"]}
        mt="2"
        mr={[0, 0, 20]}
        fontWeight="400"
        color="gray.600"
        maxWidth={["100%", "600px"]}
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Flex mt="16px">
        {continentMock.map((continentItem) => (
          <Flex
            mr="42px"
            key={continentItem.title}
            flexDirection="column"
            alignItems={["flex-start", "flex-start", "center"]}
          >
            <Text
              fontSize={36}
              lineHeight="10"
              fontWeight="semibold"
              color="yellow.300"
            >
              {continentItem.title}
            </Text>
            <Flex alignItems="center" mt={[0, 4]}>
              <Text fontSize={18} fontWeight="medium">
                {continentItem.subtitle}
              </Text>
              {continentItem.info && (
                <Tooltip
                  label={continentItem?.info.map((infoItem) => (
                    <p key={infoItem}>{infoItem}</p>
                  ))}
                  aria-label="cidades +100"
                >
                  <Image ml="4px" src="/image/info.svg" />
                </Tooltip>
              )}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
