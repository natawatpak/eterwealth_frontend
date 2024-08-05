import { useState } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import { useTranslation } from "react-i18next";

import LangSelectBtn from "../util/LangSelectBtn";

const pages = ["home", "trading", "platform", "promotion", "contact"];

const NavDrawer = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton
        aria-label="menubar"
        sx={{ color: "white", px: 0, ml: "24px" }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuRoundedIcon />
      </IconButton>

      <Drawer
        open={open}
        anchor="top"
        PaperProps={{
          sx: {
            backgroundColor: "primary.main",
            color: "white",
          },
        }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box sx={{ width: "100%", pl: "20px" }} role="presentation">
          <List sx={{ bgcolor: "primary.main" }}>
            {pages.map((page) => (
              <ListItem key={page} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={t(`navbar.${page}`)}
                    sx={{
                      color: page === "home" ? "secondary.main" : "inherit",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ bgcolor: "white" }} />
            <ListItem>
              <LangSelectBtn />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavDrawer;
