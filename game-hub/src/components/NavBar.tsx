import { HStack, Image } from "@chakra-ui/react";
import logo from "../Images/home.png";
import ColorModeSwitch from "./ColorModeSwitch";
import React from "react";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize={"60px"}></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
