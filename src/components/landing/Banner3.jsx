import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import forexIcon from "../../assets/forexIcon.png";
import coinIcon from "../../assets/coinIcon.png";
import goldIcon from "../../assets/goldIcon.png";
import stockIcon from "../../assets/stockIcon.png";

const Point = ({ Icon, title, subtitle }) => {
  return (
    <Box display="flex" alignItems="center" sx={{ mt: "80px" }} width="300px">
      <Box
        component="img"
        src={Icon}
        sx={{ height: 40, width: 40, color: "white", mr: "40px" }}
      />
      <Box>
        <Typography variant="h6" color="white">
          {title}
        </Typography>
        <Typography variant="subtitle2" color="grey">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

const Banner3 = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "black",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        component="img"
        src="https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"
        sx={{
          width: "30%",
          height: "fit-parent",
          transform: "scaleX(-1)",
          objectFit: "cover",
        }}
      />

      <Box sx={{ pt: "60px", pb: "80px", px: "80px" }}>
        <Box>
          <Typography color="white" variant="h4">
            {t(`landing.banner3.title`)}
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
            }}
          />
        </Box>
        <Box display="flex">
          <Point
            Icon={forexIcon}
            title={t("landing.banner3.point1.title")}
            subtitle={t("landing.banner3.point1.subtitle")}
          />
          <Point
            Icon={goldIcon}
            title={t("landing.banner3.point2.title")}
            subtitle={t("landing.banner3.point2.subtitle")}
          />
        </Box>
        <Box display="flex">
          <Point
            Icon={coinIcon}
            title={t("landing.banner3.point3.title")}
            subtitle={t("landing.banner3.point3.subtitle")}
          />
          <Point
            Icon={stockIcon}
            title={t("landing.banner3.point4.title")}
            subtitle={t("landing.banner3.point4.subtitle")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner3;
