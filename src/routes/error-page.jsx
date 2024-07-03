import React from "react";
import { Container, Message, MessageHeader, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = ({ userData, setUserData }) => {
  return (
    <Container>
      <NavBar userData={userData} setUserData={setUserData} />
      <Container
        textAlign="center"
        style={{ marginTop: "16px", paddingTop: "16px" }}
      >
        <Message size="massive" error>
          <MessageHeader>Error 404</MessageHeader>
          <p>Page not found.</p>
          <Link to="/">
            <Label basic color="brown">
              Go back to the homepage
            </Label>
          </Link>
        </Message>
      </Container>
    </Container>
  );
};

export default ErrorPage;
