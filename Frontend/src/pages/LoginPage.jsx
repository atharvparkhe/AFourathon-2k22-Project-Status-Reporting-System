import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Stack,
  TextInput,
  Text,
  PasswordInput,
} from "@mantine/core";

const LoginPage = () => {
  const navigateTo = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);
  const state = useSelector((state) => state);
//   console.log(state);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      await dispatch(login(username, password));
      setUsername("");
      setPassword("");
      // redirect to home page
      navigateTo("/");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "80vh",
      }}
      style={{ paddingTop: "100px" }}
    >
      {loading && <Text>Loading...</Text>}
      {user && (
        <Text fz="xl" fw={700}>
          Welcome {user.name}
        </Text>
      )}
      {error && <Text>error</Text>}
      {token && <Text>token</Text>}
      <Box component="form" onSubmit={handleSubmit} my="lg">
        <Stack>
          <TextInput
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <PasswordInput
            placeholder="Password"
            label="Password"
            withAsterisk
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" color="ocean">
            Submit
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginPage;
