import React, {useEffect , useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";


const LandingSection = () => {
  const {isLoading, response, submit} =  useSubmit();
  const { state ,onOpen , onClose } = useAlertContext();

  const formik = useFormik({
    initialValues: {firstName:"" , email:"" , type:"" ,comment:""},
    onSubmit: (values ,config,e ) => {
      submit(/* 'https://john.com/contactme' , */ values , config );
    },
    validationSchema: Yup.object().shape(
      {firstName:Yup.string().required("Required"),
        email:Yup.string().email("Invalid Email").required("Required") ,
        type:Yup.string(),
        comment:Yup.string().required("Required")}),
  });
  
   const config =  {
    Username : "kamil2004@yopmail.com",
    Password : "02A00D1B4CB89F7C568F8DD4EF9FCCEC49D6",
    Host : "smtp.elasticemail.com",
    Port:  2525 ,
      To : 'kamil2004@yopmail.com',
      From : formik.values.email,
      Subject : formik.values.type,
      Body : formik.values.comment
  }
  
  useEffect(() => {
    if(response.type === "")
    return;
    if(response.type === "success" ){
      formik.resetForm();
    }
    onOpen(response.type ,response.message);
  } , [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    
>

      <VStack  className="resBox" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%" >
          <form  onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
              {(formik.touched.firstName && formik.errors.firstName) &&   <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> }
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
             {(formik.touched.email && formik.errors.email) &&   <FormErrorMessage>{formik.errors.email}</FormErrorMessage> }
              </FormControl>
              <FormControl >
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" 
                {...formik.getFieldProps("type")}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
              {(formik.touched.comment && formik.errors.comment) &&   <FormErrorMessage>{formik.errors.comment}</FormErrorMessage> }
              </FormControl>
              
              {isLoading ? ( <Button isLoading colorScheme="purple" width="full" >
               Submit
              </Button>): (
                <Button 
                disabled={ !(formik.isValid && formik.dirty)} type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
              )}
              
               { state.isOpen && (
                 <Modal    variant={Alert} blockScrollOnMount={true} isOpen={state.isOpen} colorScheme="green" onClose={onClose} >
                 <ModalOverlay />
                 <ModalContent className={state.type === "success" ? "bg-success" : "bg-danger"}>
                 {state.type === "success" ? <ModalHeader className="text-light">All good!</ModalHeader> : <ModalHeader className="text-light">Oops!</ModalHeader>}
                   <ModalCloseButton className="text-light"/>
                   <ModalBody className="text-light mb-4">
                {state.message}
                   </ModalBody>
                 </ModalContent>
               </Modal>
            )}
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
