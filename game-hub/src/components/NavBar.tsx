import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../Images/home.png";
import React from "react";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"}></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
