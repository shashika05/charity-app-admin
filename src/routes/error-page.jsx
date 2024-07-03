import React from "react";
import { Container, Message, MessageHeader } from "semantic-ui-react";
import NavBar from "../components/NavBar";

const ErrorPage = ({ userData, setUserData }) => {
  return (
    <Container>
      <NavBar userData={userData} setUserData={setUserData} />
      <Container
        textAlign="center"
        style={{ marginTop: "12px", padding: "16px" }}
      >
        <Message size="massive" error>
          <MessageHeader>Error 404</MessageHeader>
          <p>Page not found.</p>
        </Message>
      </Container>
    </Container>
  );
};

export default ErrorPage;
