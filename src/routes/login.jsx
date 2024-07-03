import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Container,
  Message,
  MessageHeader,
} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

import { supabase } from "../utils/supabase";

const Login = ({ setUserData }) => {
  const navigate = useNavigate();
  const [error, setError] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onLogin = async () => {
    const { data } = await supabase
      .from("admins")
      .select(`name, email, password`)
      .eq("email", username);

    if (data.length === 0) {
      console.log("User not found");
      setError(true);
    } else {
      if (data[0].password !== password) {
        console.log("Incorrect password");
        setError(true);
        return;
      } else {
        let newData = {
          name: data[0].name,
          email: data[0].email,
        };
        setUserData(newData);
        localStorage.setItem("userData", JSON.stringify(newData));
        navigate("/");
      }
    }
  };

  return (
    <Container>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="black" textAlign="center">
            {" "}
            Charity App
          </Header>
          <Header as="h3" color="grey" textAlign="center">
            {" "}
            Admin Login
          </Header>
          <Form onSubmit={onLogin} size="large">
            <Segment>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Email"
                onChange={(e) => {
                  setError(false);
                  setUsername(e.target.value);
                }}
                required={true}
                error={error}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                required={true}
                onChange={(e) => {
                  setError(false);
                  setPassword(e.target.value);
                }}
                error={error}
              />

              <Button color="black" fluid size="large">
                Login
              </Button>
              {
                // If there is an error, show this message
                error && (
                  <Message negative>
                    <MessageHeader>
                      Username or Password is Incorrect{" "}
                    </MessageHeader>
                    <p>
                      Please check your username and password and try again.
                    </p>
                  </Message>
                )
              }
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Login;
