import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";


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
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
 const [offset , setOffset] = useState(0);
  const [direction , setDirection] = useState("up")
  const [translate , setTranslate] = useState(0)
  const navRef = useRef();

  useEffect( () => {
    window.addEventListener('scroll' , handleScroll);
  } ,[offset] );


  const handleScroll = () => {
    if(document.body.getBoundingClientRect().top < offset)
    setOffset(document.body.getBoundingClientRect().top);

    if(document.body.getBoundingClientRect().top < offset)
      setDirection("down");
    else 
      setDirection("up");

      direction !== "up" ? setTranslate("-200px") : setTranslate(0);
      navRef.current.style.transform = `translateY(${translate})` 
    }

  const handleClick = (anchor) =>  {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
    ref={navRef} 
    className="header"
    // display={direction === "up" ? "block" : 'none'}
    position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav >
           {socials.map( (social , index) => {
             return  <a className="mx-2 text-light" target="blank" href={social.url} key={index}><FontAwesomeIcon icon={social.icon} size="2x" /></a>
           })}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a className="text-decoration-none text-light" href="/#projects" onClick={() => handleClick("projects")}>Projects</a>
              <a className="text-decoration-none text-light" href="/#contact-me" onClick={() => handleClick("contactme")}>Contact me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
