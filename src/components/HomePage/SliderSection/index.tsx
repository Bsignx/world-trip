import Link from "next/link";
import { Text, Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const sliderContentMock = [
  {
    title: "Europa",
    subtitle: "O continente mais antigo.",
    imageUrl:
      "https://images.unsplash.com/photo-1582235217943-dfb751283394?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    title: "America do Norte",
    subtitle: "O continente mais antigo.",
    imageUrl:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
  },
  {
    title: "Africa",
    subtitle: "O continente mais antigo.",
    imageUrl:
      "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
  },
  {
    title: "Asia",
    subtitle: "O continente mais antigo.",
    imageUrl:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1093&q=80",
  },
  {
    title: "America do Sul",
    subtitle: "O continente mais antigo.",
    imageUrl:
      "https://images.unsplash.com/photo-1586245709972-ac1cb1791960?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=756&q=80",
  },
  {
    title: "Oceania",
    subtitle: "O continente mais antigo.",
    imageUrl:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
  },
];

export function SliderSection() {
  return (
    <>
      <Box textAlign="center" marginTop="6">
        <Text fontSize={["2xl", "3xl"]} fontWeight="500">
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
      </Box>
      <Box
        position="relative"
        height={["250px", "450px"]}
        margin="0 auto"
        my={["20px", "35px", "50px"]}
        maxWidth={1150}
      >
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          className="mySwiper"
        >
          {sliderContentMock.map(({ imageUrl, title, subtitle }) => (
            <SwiperSlide key={title + subtitle}>
              <Link href="/continent">
                <Box
                  cursor="pointer"
                  as="a"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDir="column"
                  h="100%"
                  w="100%"
                  bgSize="cover"
                  bgImage={`url(${imageUrl})`}
                >
                  <Text as="h3" fontSize="2xl" fontWeight="500" color="gray.50">
                    {title}
                  </Text>
                  <Text color="gray.50">{subtitle}</Text>
                </Box>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
