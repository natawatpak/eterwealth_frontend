import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import RepeatIcon from "@mui/icons-material/Repeat";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";

const Point = ({ Icon, title, subtitle }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ my: { xs: "10px", mb: "50px" }, p: "20px" }}
      width="300px"
    >
      <Box
        bgcolor="secondary.main"
        borderRadius={100}
        width="50px"
        height="50px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ mb: "10px" }}
      >
        <Icon sx={{ fontSize: 40, color: "white" }} />
      </Box>

      <Typography variant="h4" textAlign={"center"}>
        {title}
      </Typography>
      <Typography variant="subtitle2" textAlign={"center"}>
        {subtitle}
      </Typography>
    </Box>
  );
};

const Banner2 = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
      }}
    >
      <Point
        title={t(`landing.banner2.point1.title`)}
        Icon={RepeatIcon}
        subtitle={t(`landing.banner2.point1.subtitle`)}
      />
      <Point
        title={t(`landing.banner2.point2.title`)}
        Icon={PersonOutlineIcon}
        subtitle={t(`landing.banner2.point2.subtitle`)}
      />
      <Point
        title={t(`landing.banner2.point3.title`)}
        Icon={PaidOutlinedIcon}
        subtitle={t(`landing.banner2.point3.subtitle`)}
      />
      <Point
        title={t(`landing.banner2.point4.title`)}
        Icon={Groups2OutlinedIcon}
        subtitle={t(`landing.banner2.point4.subtitle`)}
      />
    </Box>
  );
};

export default Banner2;
