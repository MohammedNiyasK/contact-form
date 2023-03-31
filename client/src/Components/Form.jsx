import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  TextField,
  Button,
  Container,
  Stack,
  FormControl,
  TextareaAutosize,
  AppBar,
  Typography,
  Box,
  Toolbar,
} from "@mui/material";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:3000/contact", {
      firstName,
      lastName,
      email,
      phone,
      message,
    });
    console.log(firstName, lastName, email, phone, message);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Contact Form
            </Typography>
            <Button color="inherit">
              <Link to="/admin">Admin</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <FormControl sx={{ marginTop: "50px", marginLeft: "25%" }}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            fullWidth
            required
          />
        </Stack>
        <TextField
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="number"
          variant="outlined"
          color="secondary"
          label="phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          value={message}
          placeholder="Write the message"
          style={{ width: "100%" }}
          onChange={(e) => setMessage(e.target.value)}
        ></TextareaAutosize>
        <Button
          variant="outlined"
          color="secondary"
          type="submit"
          sx={{ marginTop: "25px" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </FormControl>
    </React.Fragment>
  );
};

export default Form;
