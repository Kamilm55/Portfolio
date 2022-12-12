import {Heading, HStack,  VStack , ButtonGroup,Button,Divider,Stack,Image,Text,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Cards = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return (
   <div>
 <Card /* maxW='xs' */ className="bg-light cards ">
 <CardBody>
   <Image
     src={imageSrc}
     alt='Green double couch with wooden legs'
     borderRadius='lg'
   />
   <Stack mt='6' spacing='3'>
     <Heading size='md'>{title}</Heading>
     <Text className='text-muted'>
        {description}
     </Text>
     
   </Stack>
 </CardBody>
 <Divider />
 <CardFooter>
       <div className='d-flex align-items-center c-pointer'>
       <h1>See more</h1>
       <FontAwesomeIcon className='mx-2' icon={faArrowRight} size="1x"  />
       </div> 
 </CardFooter>
</Card>
   </div>
  );
};

export default Cards;
 
 
 