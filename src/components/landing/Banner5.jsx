import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import GreyCoinImg from "../../assets/greycoin_shadow.png";

const Point = ({ Icon, title }) => {
  return (
    <Box
      display="flex"
      alignItems="left"
      justifyContent="center"
      sx={{ my: "20px" }}
      width={{ xs: "100%", md: "32%" }}
      maxWidth="600px"
      height="120px"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "secondary.main",
          borderRadius: "10px 0px 0px 10px",
          height: "100%",
          width: "20%",
          px: "10px",
          position: "relative",
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
        textAlign="center"
        color="grey"
        backgroundColor="white"
        variant="h5"
        borderRadius="0px 10px 10px 0px"
        width="100%"
        height="100%"
        sx={{ position: "relative" }}
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
        px: "5%",
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: "' '",
          position: "absolute",
          opacity: 0.6,
          width: "500px",
          height: "500px",
          backgroundImage: `url(${GreyCoinImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          bottom: "-200px",
          right: "-120px",
        },
      }}
    >
      {/* <Box component={"img"} src={GreyCoinImg} sx={{ opacity: "0.6" }}></Box> */}
      <Box>
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
            bgcolor: "secondary.main",
            borderRadius: "5px",
            mb: "40px",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
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
