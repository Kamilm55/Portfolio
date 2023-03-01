import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Cards from "./Cards";

const projects = [
  {
    title: "Full Stack E-commerce",
    description:
      "Technology that  I used: Html , Css , JavaScript , React , Bootstrap ,Firebase auth , Firebase firestore , Material UI",
    getImageSrc: () => require("../images/e-commerce.png"),
    link:'https://react-e-cmrc.netlify.app',
  },
  {
    title: "Youtube Clone",
    description:
      "Technology that  I used: Html , Css , JavaScript , React ,Redux Toolkit , TypeScript , Bootstrap ,Rapid Api ",
    getImageSrc: () => require("../images/youtube.png"),
    link:'https://youtubee-cloneee.netlify.app',

  },
  {
    title: "Restaurant order app",
    description:
      "Technology that  I used: Html , Css , JavaScript , React , Chakra UI",
    getImageSrc: () => require("../images/restaurant.png"),
    link:'https://restaurant-appp.netlify.app',
  },
  {
    title: "Event planner",
    description:
      "Technology that  I used: Html , Css , JavaScript , React , Weather api",
    getImageSrc: () => require("../images/weather.png"),
    link:'https://weather-appn.netlify.app',
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#212529"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <div className="container-fluid">
      <Heading as="h1" id="projects-section" className=" leftGap">
        Featured Projects
      </Heading>
      <Box
        display="flex"
        flexWrap='wrap'
        gap={8}
        justifyContent='center'
      >
        {projects.map((project) => (
          <Cards
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
      </div>
    </FullScreenSection>
  );
};

export default ProjectsSection;
