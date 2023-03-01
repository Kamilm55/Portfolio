import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  // faMedium,
  // faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const LandingSection = () => {

  const socials = [
    {
      icon: faEnvelope,
      url: "mailto: kamilmmmdov2905@gmail.com",
    },
    {
      icon: faGithub,
      url: "https://github.com/Kamilm55",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/kamil-memmedov/",
    },
  ];
  return (
    <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
  >
    <div className="container">
    <div className="row content p-3 my-3">
      <p className="green-color n-text">My name is</p>
      <Heading className="l-slate name" as='h1'>Kamil Memmedov</Heading>
      <Heading className="slate spec" as='h1'>I am a Front-End Web Developer</Heading>
      <div className="n-l-h">
      <p className="slate n-text ">
        I am a developer speciializing <span className="green-color">React js</span>. You can see my projects in GitHub profile.
      </p>
      </div>
      <div className="my-3">
        {socials.map( (social , index) => {
          return  <a className="mx-2 text-light " target="blank" href={social.url} key={index}><FontAwesomeIcon icon={social.icon} size="2x" /></a>
        })}
        </div>
        </div>
      </div>
     </FullScreenSection>
  )
  };

export default LandingSection;
