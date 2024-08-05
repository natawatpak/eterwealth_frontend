import { useState } from "react";
import { Button, Typography, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTranslation } from "react-i18next";

const languages = {
    en: { nativeName: "English" },
    th: { nativeName: "ภาษาไทย" },
  };

const LangSelectBtn = () => {
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
    <>
      <Button
        sx={{ my: 1, color: "white", display: "flex" }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
      >
        <Typography variant="body1" fontFamily={"Sarabun"}>
          {t(`navbar.language`)}
        </Typography>
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
                    <Typography variant="subtitle2" fontFamily={"Sarabun"}>
                      {languages[lng].nativeName}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
    </>
  );
};

export default LangSelectBtn;
