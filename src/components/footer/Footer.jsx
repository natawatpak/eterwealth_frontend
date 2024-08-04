import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Logo from "/logo.png";

import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        bgcolor: "black",
        width: "100%",
        p: "60px",
      }}
    >
      <Box display="flex" sx={{ color: "white" }} justifyContent="space-evenly">
        <Box component="img" sx={{ maxHeight: 50 }} src={Logo}></Box>
        <Box>
          <Typography variant="subtitle2">
            {t("footer.aboutCompany")}
          </Typography>
          <Typography variant="subtitle1">{t("footer.aboutUs")}</Typography>
          <Typography variant="subtitle1">{t("footer.whyUs")}</Typography>
          <Typography variant="subtitle1">
            {t("footer.customerService")}
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle2">{t("footer.trading")}</Typography>
          <Typography variant="subtitle1">{t("footer.accountType")}</Typography>
          <Typography variant="subtitle1">
            {t("footer.tradingInstruments")}
          </Typography>
          <Typography variant="subtitle1">
            {t("footer.tradingPlatform")}
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle2">{t("footer.promotion")}</Typography>
          <Typography variant="subtitle1">
            {t("footer.tradingBonus")}
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle2">{t("footer.contactUs")}</Typography>
          <Typography variant="subtitle1" display="flex" alignItems="center">
            <CallOutlinedIcon sx={{ fontSize: 20, mr: "5px" }} />
            {t("footer.tel")}
          </Typography>
          <Typography variant="subtitle1" display="flex" alignItems="center">
            <EmailOutlinedIcon sx={{ fontSize: 20, mr: "5px" }} />
            {t("footer.email")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
