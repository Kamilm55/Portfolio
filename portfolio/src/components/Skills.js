import { Heading, Image } from '@chakra-ui/react';
import React from 'react';
import FullScreenSection from './FullScreenSection';

const Skills = () => {
    const skillsArr1 = [
        {skill:'JavaScript' , img: () => require("../images/javascript-logo.jpg")},
        {skill:'React' , img: () => require("../images/download.png")},
        {skill:'Html' , img: () => require("../images/html.png")},
        {skill:'Css' , img: () => require("../images/css.png")},
        {skill:'TypeScript' , img: () => require("../images/typescript.png")},
        {skill:'Bootstrap' , img: () => require("../images/bootstrap.png")},
        {skill:'Redux Toolkit' , img: () => require("../images/r-toolkit.png")},
        {skill:'React Router' , img: () => require("../images/router.png")},
    ];
    const skillsArr2 = [
        {skill:'FireBase' , img: () => require("../images/firebase.png")},
    ];
    const skillsArr3 = [
        {skill:'GitHub' , img: () => require("../images/github.png")},
        {skill:'Git' , img: () => require("../images/git.png")},
        {skill:'Npm' , img: () => require("../images/npm.png")},
        {skill:'Material UI' , img: () => require("../images/mui.png")},
        {skill:'Chakra UI' , img: () => require("../images/chakra.jpg")},
        {skill:'Figma' , img: () => require("../images/figma-logo.png")},
    ];

  return (
    <FullScreenSection isDarkBackground={true}>
        <div className='d-flex justify-content-start '>
    <Heading as='h1' margin='10px ' id='skills-section' className='text-start'>Skills</Heading>
        </div>

        <h1 className='mt-4 fs-1'>Front End </h1>
        <div className="card-group ">
        {skillsArr1.map((item ,index) =>{
            return (
                <div key={index} >
                    <div className='card skilCard'>
                       {/* <img src='../images/photo1.jpg' loading='lazy' alt='img'/> */}
                    {/* <h1 className='card-title'>{item.skill}</h1> */}
                    <Image src={item.img()} /* height={200} *//>
                    </div>
                </div>
            )
        })}
        </div>
        <h1 className='mt-4 fs-1'>Back End </h1>
        <div className="card-group ">
        {skillsArr2.map((item ,index) =>{
            return (
                <div key={index} >
                    <div className='card skilCard'>
                       {/* <img src='../images/photo1.jpg' loading='lazy' alt='img'/> */}
                    {/* <h1 className='card-title'>{item.skill}</h1> */}
                    <Image src={item.img()} /* height={200} *//>
                    </div>
                </div>
            )
        })}
        </div>
        <h1 className='mt-4 fs-1'>Other Tools</h1>
        <div className="card-group my-4">
        {skillsArr3.map((item ,index) =>{
            return (
                <div key={index} >
                    <div className='card skilCard'>
                       {/* <img src='../images/photo1.jpg' loading='lazy' alt='img'/> */}
                    {/* <h1 className='card-title'>{item.skill}</h1> */}
                    <Image src={item.img()} /* height={200} *//>
                    </div>
                </div>
            )
        })}
        </div>
    </FullScreenSection>
  )
}

export default Skills