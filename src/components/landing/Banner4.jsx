import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

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
          <>
            {account[field] === true ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "green",
                  borderRadius: "100px",
                  width: "fit-content",
                  alignSelf: "center",
                  p: "1px",
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
                  bgcolor: "red",
                  borderRadius: "100px",
                  width: "fit-content",
                  alignSelf: "center",
                  p: "1px",
                }}
              >
                <ClearRoundedIcon sx={{ color: "white", fontSize: 20 }} />
              </Box>
            ) : (
              <Typography variant="subtitle1">{account[field]}</Typography>
            )}

            <Typography variant="caption" sx={{ mb: "15px" }}>
              {t(`landing.banner4.${field}`)}
            </Typography>
          </>
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
      }}
    >
      <Box sx={{ pl: "2.5%" }}>
        <Typography variant="h4">{t("landing.banner4.title")}</Typography>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          gap: "30px",
          my: "60px",
        }}
      >
        {Object.keys(accounts).map((account) => (
          <Box
            key={account}
            display="flex"
            flexDirection="column"
            textAlign="center"
            sx={{
              mx: "10px",

              borderRadius: "10px",
              boxShadow: 2,
              minWidth: "200px",
              maxWidth: "420px",
              width: "30%",
            }}
          >
            <Box
              sx={{
                bgcolor: account === "VIP" ? "gold" : "silver",
                borderRadius: "5px 5px 0px 0px",
                py: "10px",
                mb: "30px",
              }}
            >
              <Typography variant="h6">{account}</Typography>
            </Box>

            <Typography variant="h4">
              {accounts[account].minimumDeposit}
            </Typography>
            <Typography variant="subtitle1">
              {t(`landing.banner4.minimumDeposit`)}
            </Typography>
            <Divider sx={{ m: "15px" }}></Divider>
            <AccountDetail accountType={account} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Banner4;
