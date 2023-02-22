import React from "react";
import "./Home.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";


const Home = () => {
  return (
    <div className="Home">
      <AppBar position="static">
        <Container maxWidth="sl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
             
              }}
            >
              ION Solvency
            </Typography>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ION Solvency
            </Typography>
        
          </Toolbar>
        </Container>
      </AppBar>
      <h1>Select image to upload</h1>
      <input
        type={"file"}
        onChange={(e) => {
          console.log(e.target.files);
        }}
      />
    <div>
 
    </div>
    </div>
  );
};
export default Home;
