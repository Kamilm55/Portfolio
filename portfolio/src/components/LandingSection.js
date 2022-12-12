import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Kamil ";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
      <Avatar size="2xl" src="https://media-exp1.licdn.com/dms/image/C4D03AQHhFXhAPPW5nA/profile-displayphoto-shrink_800_800/0/1659615762296?e=1675296000&v=beta&t=dAZhABOkOqOHLdJw18cycuYP9my1wN4NcFt6jmZ_Lis" />
    <VStack spacing={8}>
      <Heading size="xs">{greeting}</Heading>
      <Heading>{bio1}</Heading>
    </VStack>
      <Heading>{bio2}</Heading>
  </FullScreenSection>
);

export default LandingSection;
