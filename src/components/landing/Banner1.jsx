import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import BackgroundImg from "../../assets/banner1_bg.png";

const Banner1 = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        mt: {xs: "68px", md:"65px"},
        maxHeight: "500px",
        p: "10%",
        // backgroundImage: `url(https://images6.alphacoders.com/597/597010.jpg)`,
        backgroundImage: `url(${BackgroundImg})`,
        backgroundPosition:"center",
        backgroundSize: "cover",
      }}
    >
      <Typography sx={{ textAlign: "center" }} variant="h3" color="white">
        {t("landing.banner1.title")}
      </Typography>
      <Typography
        sx={{ textAlign: "center", width: "100%" }}
        variant="subtitle1"
        color="white"
      >
        {t("landing.banner1.subtitle")}
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <Button
          sx={{
            bgcolor: "success.main",
            width: "240px",

            my: "40px",
            color: "white",
          }}
        >
          {t("landing.banner1.openAccount")}
        </Button>
      </Box>
    </Box>
  );
};

export default Banner1;
