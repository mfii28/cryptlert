import { Box, Grid, Typography } from "@mui/material";
import React, { useState, createContext } from "react";
import CurrencyData from "./section/CurrencyData";
import Capitalization from "./section/Capitalization";
import "./styles.css";
 
export const AppContext = createContext();

function App() {
  const [currency, setCurrency] = useState("bitcoin");
  const [vsCurrency, setVsCurrency] = useState("usd");
  const [showCapSide, setShowCapSide] = useState(false);

  return (
    <AppContext.Provider
      value={{
        currency,
        setCurrency,
        vsCurrency,
        setVsCurrency,
        showCapSide,
        setShowCapSide,
      }}
    >
      <Box sx={{ height: "100vh", backgroundColor: "rgb(21,21,32)" }}>
 {/* Logo at the top center */}
 <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "5%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            fontWeight: 700,
          }}
        >
          Coinlert
        </Typography>
        <Grid container spacing={0} style={{ height: "100%" }}>
          <Grid item xs={12} lg={9} className="main-content">
            <CurrencyData coinName={currency} />
          </Grid>
          <Grid item lg={3} className={`capitalization ${showCapSide ? "showCap" : ""}`}>
            <Capitalization />
          </Grid>
        </Grid>
        <Box
          className={`openCapitalization ${showCapSide ? "moveIcon" : ""}`}
        >
          <input
            className="checkbox"
            type="checkbox"
            checked={showCapSide}
            value={showCapSide}
            onChange={() => setShowCapSide(!showCapSide)}
          />
          <div className="line1 lines" />
          <div className="line2 lines" />
          <div className="line3 lines" />
        </Box>
      </Box>
    </AppContext.Provider>
  );
}

export default App;
