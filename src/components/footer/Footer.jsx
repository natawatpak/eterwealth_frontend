import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Logo from "/logo.png";

import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = () => {
  const { t } = useTranslation();
  const TextColumn = ({ title, points }) => {
    return (
      <Box sx={{ mb: "20px", width: { xs: "200px", md: "auto" } }}>
        <Typography
          variant="body1"
          fontWeight="600"
          sx={{ pb: "15px", pr: "15px" }}
        >
          {t(`footer.${title}`)}
        </Typography>
        {points.map((value) => (
          <Typography
            key={value}
            variant="body2"
            sx={{ pb: "10px", pr: "15px" }}
          >
            {t(`footer.${value}`)}
          </Typography>
        ))}
      </Box>
    );
  };
  return (
    <>
      <Box
        sx={{
          bgcolor: "black",
          width: "100%",
          pt: "50px",
          pb: "80px",
        }}
      >
        <Box
          display="flex"
          sx={{ color: "white", pl: { xs: "30px", md: "auto" } }}
          justifyContent={{ xs: "left", md: "space-evenly" }}
          flexWrap="wrap"
          // flexDirection={{ xs: "column", md: "row" }}
        >
          <Box sx={{ width: { xs: "100%", md: "auto" } }}>
            <Box
              component="img"
              sx={{
                maxHeight: 50,
                objectFit: "scale-down",
                width: "fit-content",
                mb: "20px",
              }}
              src={Logo}
            />
          </Box>

          <TextColumn
            title="aboutCompany"
            points={["aboutUs", "whyUs", "customerService"]}
          />

          <TextColumn
            title="trading"
            points={["accountType", "tradingInstruments", "tradingPlatform"]}
          />

          <TextColumn title="promotion" points={["tradingBonus"]} />

          <Box sx={{ mb: "20px", width: { xs: "100%", md: "auto" } }}>
            <Typography variant="body1" fontWeight="600" sx={{ pb: "15px" }}>
              {t("footer.contactUs")}
            </Typography>
            <Typography
              variant="body2"
              sx={{ pb: "5px" }}
              display="flex"
              alignItems="center"
            >
              <CallOutlinedIcon sx={{ fontSize: 20, mr: "5px" }} />
              {t("footer.tel")}
            </Typography>
            <Typography
              variant="body2"
              sx={{ pb: "5px" }}
              display="flex"
              alignItems="center"
            >
              <EmailOutlinedIcon sx={{ fontSize: 20, mr: "5px" }} />
              {t("footer.email")}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "primary.light",
          color: "white",
          textAlign: "center",
          py: "20px",
        }}
      >
        <Typography variant="body2">
          Copyright © 2021 Eterwealth Limited All Right reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
