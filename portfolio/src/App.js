import Header from "./components/Header";
import {ChakraProvider} from "@chakra-ui/react"
import React from "react";
import LandingSection from "./components/LandingSection";
import 'bootstrap/dist/css/bootstrap.min.css'
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import {AlertProvider} from "./context/alertContext"
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
      <ChakraProvider>
        <main>
        <Header />
            <LandingSection />
            <ProjectsSection />
            <Skills/>
        <AlertProvider>
            <ContactMeSection />
        </AlertProvider>
        <Footer />
        </main>
      </ChakraProvider>
  );
}

export default App;
