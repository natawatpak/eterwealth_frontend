import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Typography,
  Menu,
  MenuItem,
  Button,
  Divider,
} from "@mui/material";
import Logo from "/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { useTranslation } from "react-i18next";

const languages = {
  en: { nativeName: "English" },
  th: { nativeName: "ภาษาไทย" },
};

const pages = ["home", "trading", "platform", "promotion", "contact"];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box component="img" sx={{ maxHeight: 50 }} src={Logo}></Box>
          <Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Typography textTransform={"none"}>
                    {t(`navbar.${page}`)}
                  </Typography>
                </Button>
              ))}

              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                variant="outlined"
                color="secondary"
              >
                <Typography textTransform={"none"}>
                  {t(`navbar.login`)}
                </Typography>
              </Button>

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

              <Button
                sx={{ my: 1, color: "white", display: "flex" }}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                endIcon={<ArrowDropDownIcon />}
              >
                {t(`navbar.language`)}
              </Button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {Object.keys(languages).map((lng) => (
                  <MenuItem
                    key={lng}
                    style={{
                      fontWeight:
                        i18n.resolvedLanguage === lng ? "bold" : "normal",
                    }}
                    onClick={() => {
                      i18n.changeLanguage(lng);
                      handleClose;
                    }}
                  >
                    {languages[lng].nativeName}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
