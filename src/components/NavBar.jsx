import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Menu,
  Icon,
  Header,
  Popup,
} from "semantic-ui-react";

function NavBar({ userData, setUserData }) {
  const navigate = useNavigate();

  const onLogout = () => {
    setUserData({});
    localStorage.removeItem("userData");
    navigate("/login");
  };

  return (
    <Container>
      <Header as="h2" style={{ color: "black", marginTop: "12px" }}>
        Charity App | Dashboard
      </Header>
      <p style={{ textAlign: "right", marginRight: "16px" }}>
        Welcome {userData.name}!
      </p>
      <Menu size="large">
        <Container>
          <Menu.Item as="a" active>
            Users
          </Menu.Item>
          <Menu.Item as="a">Posted Items</Menu.Item>
          <Menu.Item as="a">Active Fundraisings</Menu.Item>
          <Menu.Item position="right">
            <Button as="a" color="black" onClick={() => navigate("/login")}>
              <p>
                Profile <Icon name="user" />
              </p>
            </Button>

            <Popup
              content="Do you want to logout?"
              trigger={
                <Button
                  as="a"
                  style={{ marginLeft: "0.5em" }}
                  color="black"
                  onClick={onLogout}
                >
                  <p>
                    Logout <Icon name="sign-out" />
                  </p>
                </Button>
              }
            />
          </Menu.Item>
        </Container>
      </Menu>
    </Container>
  );
}

export default NavBar;
