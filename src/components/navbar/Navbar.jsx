import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import Logo from "/logo.png";

import NavDrawer from "./NavDrawer";

import LangSelectBtn from "../util/LangSelectBtn";

import { useTranslation } from "react-i18next";

const pages = ["home", "trading", "platform", "promotion", "contact"];

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box
            component="img"
            sx={{
              ml: { xs: 0, md: "25px" },
              maxHeight: 50,
              objectFit: { xs: "cover", md: "fill" },
              width: { xs: "160px", md: "auto" },
            }}
            src={Logo}
          ></Box>
          <Box>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    sx={{
                      my: 2,
                      mx: 2,
                      color: "white",
                      display: "block",
                      p: 0,
                      borderRadius: 0,
                      borderBottom: page === "home" ? "4px solid" : "",
                      borderColor: "secondary.main",
                    }}
                  >
                    <Typography textTransform={"none"} fontFamily={"Sarabun"}>
                      {t(`navbar.${page}`)}
                    </Typography>
                  </Button>
                ))}
              </Box>

              <Button
                sx={{ my: 2, ml: 2, color: "white", display: "block" }}
                variant="outlined"
                color="secondary"
              >
                <Typography
                  textTransform={"none"}
                  fontFamily={"Sarabun"}
                  color="secondary.main"
                >
                  {t(`navbar.login`)}
                </Typography>
              </Button>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Divider
                  orientation="vertical"
                  flexItem
                  variant="middle"
                  sx={{
                    width: "2px",
                    bgcolor: "white",
                    mx: "20px",
                    my: "16px",
                    borderRadius: "5px",
                  }}
                ></Divider>
                <LangSelectBtn />
              </Box>

              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <NavDrawer />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
