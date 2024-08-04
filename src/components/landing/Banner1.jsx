import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Banner1 = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        maxHeight: "500px",
        p: "10%",
        backgroundImage: "url(https://images6.alphacoders.com/597/597010.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Typography sx={{ textAlign: "center" }} variant="h3" color="white">
        {t("landing.banner1.title")}
      </Typography>
      <Typography
        sx={{ textAlign: "center", width: "100%" }}
        variant="h6"
        color="white"
      >
        {t("landing.banner1.subtitle")}
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <Button sx={{ bgcolor: "green", width: "180px", my: "40px" }}>
          <Typography sx={{ color: "white" }}>
            {t("landing.banner1.openAccount")}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Banner1;
