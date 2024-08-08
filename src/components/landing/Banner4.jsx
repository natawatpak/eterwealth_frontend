import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import GreyCoinImg from "../../assets/greycoin.png";

const accounts = {
  CLASSIC: {
    minimumDeposit: "$20",
    contractSize: "100,000",
    baseCurrency: "USD",
    leverage: true,
    ea: false,
    commission: "No",
    maxOrder1: "500",
    maxOrder2: "up to 1:2000",
    maxLot: "50",
    noSwaps: true,
  },
  VIP: {
    minimumDeposit: "$20",
    contractSize: "100,000",
    baseCurrency: "USD",
    leverage: true,
    ea: false,
    commission: "No",
    maxOrder1: "500",
    maxOrder2: "up to 1:500",
    maxLot: "50",
    noSwaps: true,
  },
  STANDARD: {
    minimumDeposit: "$20",
    contractSize: "100,000",
    baseCurrency: "USD",
    leverage: true,
    ea: false,
    commission: "$8 per lot",
    maxOrder1: "200",
    maxOrder2: "up to 1:1000",
    maxLot: "150",
    noSwaps: true,
  },
};

const Banner4 = () => {
  const { t } = useTranslation();
  const AccountDetail = ({ accountType }) => {
    const account = accounts[accountType];
    return (
      <>
        {[
          "contractSize",
          "baseCurrency",
          "leverage",
          "ea",
          "commission",
          "maxOrder1",
          "maxOrder2",
          "maxLot",
          "noSwaps",
        ].map((field) => (
          <Box
            key={field}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {account[field] === true ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "success.main",
                  borderRadius: "100px",
                  width: "fit-content",
                  alignSelf: "center",
                }}
              >
                <CheckRoundedIcon sx={{ color: "white", fontSize: 20 }} />
              </Box>
            ) : account[field] === false ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "error.main",
                  borderRadius: "100px",
                  width: "fit-content",
                  alignSelf: "center",
                  p: "1px",
                }}
              >
                <ClearRoundedIcon sx={{ color: "white", fontSize: 20 }} />
              </Box>
            ) : (
              <Typography variant="h5">{account[field]}</Typography>
            )}

            <Typography variant="body2" color="grey" sx={{ mb: "20px" }}>
              {t(`landing.banner4.${field}`)}
            </Typography>
          </Box>
        ))}
      </>
    );
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "100%",
        pt: "60px",
        px: "5%",
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: "' '",
          position: "absolute",
          opacity: 0.6,
          width: "750px",
          height: "750px",
          backgroundImage: `url(${GreyCoinImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          top: "-300px",
          left: "-300px",
        },
      }}
    >
      <Box>
        <Typography variant="h3" sx={{ position: "relative" }}>
          {t("landing.banner4.title")}
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
            position: "relative",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: "30px",
          my: "50px",
        }}
      >
        {Object.keys(accounts).map((account) => (
          <Box
            key={account}
            display="flex"
            flexDirection="column"
            textAlign="center"
            sx={{
              mx: "5px",
              borderRadius: "10px",
              boxShadow: "2px 2px 10px lightGray",
              minWidth: "200px",
              maxWidth: "420px",
              width: { xs: "100%", md: "30%" },
              pb: "30px",
              bgcolor: "white",
              position: "relative",
            }}
          >
            <Box
              sx={{
                bgcolor: account === "VIP" ? "secondary.main" : "silver",
                borderRadius: "5px 5px 0px 0px",
                py: "10px",
                mb: "30px",
              }}
            >
              <Typography variant="h5">{account}</Typography>
            </Box>

            <Typography variant="h3">
              {accounts[account].minimumDeposit}
            </Typography>
            <Typography variant="body1" color="grey">
              {t(`landing.banner4.minimumDeposit`)}
            </Typography>
            <Divider
              sx={{
                m: "15px",
                alignSelf: "center",
                bgcolor: "black",
                width: "50%",
              }}
            ></Divider>
            <AccountDetail accountType={account} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Banner4;
