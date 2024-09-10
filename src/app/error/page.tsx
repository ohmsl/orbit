import { Box, Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h4" color="error" fontWeight={200}>
        Oops! Something went wrong.
      </Typography>
    </Box>
  );
};

export default ErrorPage;
