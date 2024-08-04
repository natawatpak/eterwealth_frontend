import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

const Point = ({ Icon, title }) => {
  console.log(Icon);
  return (
    <Box
      display="flex"
      alignItems="left"
      justifyContent="center"
      sx={{ my: "20px", p: "10px" }}
      width="30%"
      maxWidth="500px"
      height="140px"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "gold",
          borderRadius: "10px 0px 0px 10px",
          height: "100%",
          width: "20%",
          px: "10px",
        }}
      >
        <Icon
          sx={{
            fontSize: 60,
            color: "white",
          }}
        />
      </Box>
      <Typography
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="grey"
        backgroundColor="white"
        variant="h4"
        borderRadius="0px 10px 10px 0px"
        width="100%"
        height="100%"
      >
        {title}
      </Typography>
    </Box>
  );
};

const Banner5 = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        bgcolor: "black",
        width: "100%",
        pb: "120px",
      }}
    >
      <Box sx={{ pl: "2.5%" }}>
        <Typography variant="h4" sx={{ pt: "60px", color: "white" }}>
          {t("landing.banner5.title")}
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
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Point
          title={t(`landing.banner5.point1.title`)}
          Icon={PeopleOutlineOutlinedIcon}
        />
        <Point
          title={t(`landing.banner5.point2.title`)}
          Icon={FeedOutlinedIcon}
        />
        <Point
          title={t(`landing.banner5.point3.title`)}
          Icon={LibraryBooksOutlinedIcon}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Point
          title={t(`landing.banner5.point4.title`)}
          Icon={PublicOutlinedIcon}
        />
        <Point
          title={t(`landing.banner5.point5.title`)}
          Icon={LaptopOutlinedIcon}
        />
        <Point
          title={t(`landing.banner5.point6.title`)}
          Icon={AccessAlarmOutlinedIcon}
        />
      </Box>
    </Box>
  );
};

export default Banner5;
