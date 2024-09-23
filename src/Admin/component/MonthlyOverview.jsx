import { TrendingUp } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

const salesData = [
  {
    stats: "245k",
    tittle: "Sales",
    color: "primary",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "12.5k",
    tittle: "Customer",
    color: "success",
    icon: <AccountCircleIcon sx={{ fontSize: "2rem" }} />,
  },
  {
    stats: "1.54k",
    tittle: "Products",
    color: "warning",
    icon: <SettingsCellIcon sx={{ fontSize: "2rem" }} />,
  },
  {
    stats: "88k",
    tittle: "Revenue",
    color: "info",
    icon: <AttachMoneyIcon sx={{ fontSize: "2rem" }} />,
  },
];

const renderState = () => {
    return salesData.map((item, index) => {
      return ( // You need to add 'return' here
        <Grid  item xs={12} sm={3}  key={index}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              variant="rounded"
              sx={{
                mr: 3,
                width: 50,
                height: 52,
                boxShadow: 3,
                color: "white",
                backgroundColor: `${item.color}.main`, // Use backgroundColor instead of background
              }}
            >
              {item.icon}
            </Avatar>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="caption">{item.tittle}</Typography>
              <Typography>{item.stats}</Typography>
            </Box>
          </Box>
        </Grid>
      );
    });
  };
function MonthlyOverview() {
  return (
    <Card sx={{}}>
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontWeight: 600}}
            >
              Total 48.5% growth
            </Box>
            😎 this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing:'.15px !important'
          },
        }}
      />
      <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
        <Grid container spacing={[5,0]}>
            {renderState()}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MonthlyOverview;
