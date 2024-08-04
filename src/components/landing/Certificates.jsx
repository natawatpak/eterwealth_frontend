import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import certificates1 from "../../assets/certificates1.png";
import certificates2 from "../../assets/certificates2.png";
import certificates3 from "../../assets/certificates3.png";

const Certificates = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "100%",
        pb: "120px",
      }}
    >
      <Box sx={{ pl: "2.5%" }}>
        <Typography variant="h4" sx={{ pt: "60px", color: "grey" }}>
          {t("landing.certificates")}
        </Typography>
        <Divider
          orientation="horizontal"
          flexItem
          sx={{
            width: "140px",
            height: "3px",
            mt: "10px",
            bgcolor: "gold",
            borderRadius: "5px",
            mb: "40px",
          }}
        />

        <Box sx={{ display: "flex", gap: "30px", justifyContent: "center" }}>
          <Box
            component="img"
            src={certificates1}
            sx={{ objectFit: "scale-down" }}
          ></Box>
          <Box
            component="img"
            src={certificates2}
            sx={{ objectFit: "scale-down" }}
          ></Box>
          <Box
            component="img"
            src={certificates3}
            sx={{ objectFit: "scale-down" }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Certificates;
