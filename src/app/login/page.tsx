"use client";
import GithubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { login, signInWithGithub, signInWithGoogle, signup } from "./actions";

const SignInPage = () => {
  const [signInOrSignUp, setSignInOrSignUp] = useState<"Sign In" | "Sign Up">(
    "Sign In"
  );

  const switchSignInOrSignUp = () => {
    setSignInOrSignUp((prev) => (prev === "Sign In" ? "Sign Up" : "Sign In"));
  };

  const [name, setName] = useState({ firstname: "", lastname: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    switch (signInOrSignUp) {
      case "Sign In":
        login({ email, password });
        break;
      case "Sign Up":
        signup({
          email,
          password,
          metadata: { name },
        });
        break;
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Stack spacing={2}>
        <Box>
          <Typography variant="h5">Welcome</Typography>
          <Typography variant="subtitle1">
            {signInOrSignUp === "Sign In"
              ? "Please sign in to continue"
              : "Create an account to get started."}
          </Typography>
        </Box>
        {signInOrSignUp === "Sign Up" && (
          <Stack spacing={2} direction="row" width="100%">
            <TextField
              label="First Name"
              id="nex-poll-first-name"
              value={name.firstname}
              onChange={(e) => setName({ ...name, firstname: e.target.value })}
              fullWidth
            />
            <TextField
              label="Last Name"
              id="nex-poll-last-name"
              value={name.lastname}
              onChange={(e) => setName({ ...name, lastname: e.target.value })}
              fullWidth
            />
          </Stack>
        )}
        <TextField
          label="Email"
          type="email"
          id="nex-poll-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          id="nex-poll-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link href="/forgot-password">
          <Typography variant="body2" color="info.main">
            Forgot password?
          </Typography>
        </Link>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          {signInOrSignUp}
        </Button>
        <Typography variant="body2" color="error.main">
          {/* {error?.message} */}
        </Typography>
        <Stack direction="row" spacing={1} width="100%" justifyContent="center">
          <Typography variant="body2">
            {signInOrSignUp === "Sign In"
              ? "Don't have an account?"
              : "Already have an account?"}
          </Typography>
          <Typography
            variant="body2"
            color="info.main"
            onClick={switchSignInOrSignUp}
            sx={{ cursor: "pointer" }}
          >
            {signInOrSignUp === "Sign In" ? "Sign Up" : "Sign In"}
          </Typography>
        </Stack>
        <Divider>OR</Divider>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#F1F3F4",
            "&:hover": {
              backgroundColor: "#E1E4E5",
            },
            color: "#24292e",
          }}
          startIcon={<GoogleIcon />}
          onClick={() => signInWithGoogle()}
        >
          Sign In with Google
        </Button>
        {/* <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#fff",
            "&:hover": {
              backgroundColor: "#F1F3F4",
            },
            color: "#24292e",
          }}
          startIcon={<AppleIcon />}
          onClick={handleAuthWithApple}
        >
          Sign In with Apple
        </Button> */}
        <Button
          variant="contained"
          fullWidth
          onClick={() => signInWithGithub()}
          sx={{
            backgroundColor: "#24292e",
            "&:hover": {
              backgroundColor: "#1d1f21",
            },
            color: "#fff",
          }}
          startIcon={<GithubIcon />}
        >
          Sign In with Github
        </Button>
      </Stack>
    </Container>
  );
};

export default SignInPage;
