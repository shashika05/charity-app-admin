import React from "react";
import {
  ModalContent,
  ModalActions,
  Button,
  Header,
  Icon,
  Modal,
} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function LoginModel() {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  return (
    <Modal
      basic
      centered
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      style={{
        backgroundColor: "rgba(0, 0, 0, 1)",
        padding: "20px",
        borderRadius: "10px",
      }}
      closeOnEscape={false}
      closeOnDimmerClick={false}
      closeOnPortalMouseLeave={false}
      closeOnDocumentClick={false}
      closeOnTriggerBlur={false}
      closeOnTriggerClick={false}
      closeIcon={false}
      closeOnTriggerMouseLeave={false}
    >
      <Header icon>
        <Icon name="stopwatch" />
        Haven't been here for a while?
      </Header>
      <ModalContent>
        <p style={{ textAlign: "center" }}>
          You have been inactive for a while. You have been logged out.
          <br />
          Please log in again.
        </p>
      </ModalContent>
      <ModalActions>
        <Button basic color="grey" inverted onClick={() => navigate("/login")}>
          <Icon name="sign in" /> Login
        </Button>
      </ModalActions>
    </Modal>
  );
}

export default LoginModel;
