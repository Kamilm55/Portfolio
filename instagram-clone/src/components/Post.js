import React from 'react';
import { BiShare ,BiLike ,BiChat } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import {Avatar, CardFooter ,Heading ,CardBody , Text , Image, Button ,CardHeader ,Flex , IconButton , Card ,Box}  from '@chakra-ui/react'
// import {BiShare , IconButton , BsThreeDotsVertical, BiChat ,BiLike } from '@chakra-ui/icons'

function Post(props) {
  return (
    <div>
        {props.links.map( ( url , index) => {
            return (
              <Card maxW='md' className=" shadow mx-auto my-4 " key={index}>
              <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            
                    <Box>
                      <Heading size='sm'>Segun Adebayo</Heading>
                      <Text>Creator, Chakra UI</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant='ghost'
                    colorScheme='gray'
                    aria-label='See menu'
                    icon={<BsThreeDotsVertical />}
                  />
                </Flex>
              </CardHeader>
              <CardBody>
                <Text>
                  With Chakra UI, I wanted to sync the speed of development with the speed
                  of design.
                </Text>
              </CardBody>
              <Image
              height="300px"
                objectFit='cover'
                src={url}
                alt='Chakra UI'
              />
            
              <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                  '& > button': {
                    minW: '136px',
                  },
                }}
              >
                <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                  Like
                </Button>

                <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                  Comment
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                  Share
                </Button>
              </CardFooter>
            </Card>
            )
        })}
    </div>
  )
}

export default Post