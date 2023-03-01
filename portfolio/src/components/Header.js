import React, { useEffect, useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";


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
      backgroundColor="rgb(10 25 47 / 85%)"
    >
      <Box color="white" /* maxWidth="1280px" */ margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          className='headerWidth'
        >
          <nav >
            <div className=' c-pointer rounded greenBtn logo'>Kamil</div>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a className="text-decoration-none text-light h-green" href="/#projects" onClick={() => handleClick("about")}><span className='green-color'>01.</span> About</a>
              <a className="text-decoration-none text-light h-green" href="/#projects" onClick={() => handleClick("experience")}><span className='green-color'>02.</span> Experience</a>
              <a className="text-decoration-none text-light h-green" href="/#projects" onClick={() => handleClick("projects")}><span className='green-color'>03.</span> Projects</a>
              <a className="text-decoration-none text-light h-green" href="/#skills" onClick={() => handleClick("skills")}><span className='green-color'>04.</span> Skills</a>
              <a className="text-decoration-none text-light h-green" href="/#contact-me" onClick={() => handleClick("contactme")}><span className='green-color'>05.</span> Contact</a>
              <button className=' greenBtn' type='button'>Resume</button>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
