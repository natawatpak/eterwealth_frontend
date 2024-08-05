import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import certificate1 from "../../assets/certificate1.png";
import certificate2 from "../../assets/certificate2.png";
import certificate3 from "../../assets/certificate3.png";

const Certificates = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "100%",
        pb: "120px",
        px: "5%",
      }}
    >
      <Box>
        <Typography variant="h3" sx={{ pt: "60px", color: "grey" }}>
          {t("landing.certificate")}
        </Typography>
        <Divider
          orientation="horizontal"
          flexItem
          sx={{
            width: "140px",
            height: "3px",
            mt: "10px",
            bgcolor: "secondary.main",
            borderRadius: "5px",
            mb: "40px",
          }}
        />

        <Box
          sx={{ display: "flex", justifyContent: "space-between", pr: "2%" }}
        >
          <Box
            component="img"
            src={certificate1}
            sx={{ objectFit: "scale-down", width: "30%" }}
          ></Box>
          <Box
            component="img"
            src={certificate2}
            sx={{ objectFit: "scale-down", width: "30%" }}
          ></Box>
          <Box
            component="img"
            src={certificate3}
            sx={{ objectFit: "scale-down", width: "30%" }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Certificates;
