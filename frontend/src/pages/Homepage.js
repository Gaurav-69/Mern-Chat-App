import React, { useEffect } from 'react';
import { Container, Box, Text, TabList, TabPanels,Tab, TabPanel, Tabs } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Homepage = () =>{

  const history = useHistory();

  useEffect(() =>{
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);
  return (
    <Container maxW="xl" centerContent>
    <Box 
    d="flex"
    justifyContent="center"
    textAlign="Center"
    p={3}
    bg={"white"}
    w="100%"
    m="40px 0 15px 0"
    borderRadius="lg"
    borderWidth="1px"
    >
      <Text fontSize="6xl" fontFamily="Raleway" color="black">Talk-A-Tive</Text>
    </Box>
    <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" color="black" >
      <Tabs variant='soft-rounded'>
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      {<Login/> }
      
    </TabPanel>
    <TabPanel>
     {<Signup/> }
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>
    </Container>
  )
}
export default Homepage;