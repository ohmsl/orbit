import MenuIcon from "@mui/icons-material/MenuRounded";
import { Button, IconButton, Stack } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
      p={3}
    >
      <IconButton color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="contained" LinkComponent={Link} href="/login">
          Sign In
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
