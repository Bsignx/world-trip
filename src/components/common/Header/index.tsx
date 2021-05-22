import { useRouter } from "next/router";
import Link from "next/link";
import { Flex, Image, Spacer } from "@chakra-ui/react";

export const Header = () => {
  const { asPath } = useRouter();

  return (
    <Flex justifyContent="space-between" alignItems="center" pt="4" pb="4" px={['16px', 20]}>
      {asPath !== "/" ? (
        <Link href="/">
          <a>
            <Image src="/image/goBack.svg" />
          </a>
        </Link>
      ) : (
        <Spacer flexGrow="0" />
      )}

      <Image src="/image/logo.svg" w={["100px", "200px"]} />
      <Spacer flexGrow="0" />
    </Flex>
  );
};
