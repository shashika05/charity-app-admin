import React from "react";

import NavBar from "../components/NavBar";
import UserTable from "../components/UserTable";
import LoginModel from "../components/LoginModel";

import { Container } from "semantic-ui-react";

export default function Root({ userData, setUserData }) {
  return (
    <Container>
      {!userData.email && <LoginModel />}
      <NavBar userData={userData} setUserData={setUserData} />
      <UserTable />
    </Container>
  );
}
