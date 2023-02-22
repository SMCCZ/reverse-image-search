import React, { useState } from "react";
import "./Home.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import storage from "../../firebase";
import searchImageBucketName from "../../utills/constants";

const Home = () => {
  const [pickedImage, setPickedImage] = useState(null);

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
      <h1
        style={{
          fontFamily: "Nunito",
          fontWeight: 700,
          fontSize: 22,
        }}
      >
        Select image to upload
      </h1>
      {pickedImage != null ? (
        <div>
          {" "}
          <Box
            sx={{
              width: 300,
              height: 300,
              margin: "auto",
              marginBottom: "32px",
              alignContent: "center",
              border: "2px solid black",
              borderRadius: "16px",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            {" "}
            <img
              src={pickedImage}
              alt=""
              style={{
                width: 300,
                height: 300,
                margin: "auto",
                padding: "auto",
                objectFit: "cover",
                border: "2px solid black",
                borderRadius: "16px",
              }}
            ></img>
          </Box>{" "}
        </div>
      ) : (
        <></>
      )}
      <input
        type={"file"}
        onChange={(e) => {
          console.log(e.target.files);
          const storageRef = ref(
            storage,
            `${searchImageBucketName}${e.target.files[0].name}`
          );
          const uploadTask = uploadBytesResumable(
            storageRef,
            e.target.files[0]
          );
          uploadTask
            .then((snap) => {
              console.log(snap);
              getDownloadURL(snap.ref).then((url) => {
                setPickedImage(url);
              });
              setPickedImage(snap.ref);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      />
      <div>
        <Button
          style={{
            margin: "32px",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingTop: "8px",
            paddingBottom: "8px",
            background: "white",
            color: "black",
            borderRadius: "8px",
          }}
        >
          Search
        </Button>
      </div>
      <div className="engine">
        <a target="_blank" href={pickedImage}>
          Yandex
        </a>
      </div>{" "}
      <div className="engine">
        <a target="_blank" href={pickedImage}>
          Google
        </a>
      </div>{" "}
      <div className="engine">
        <a target="_blank" href={pickedImage}>
          Bing
        </a>
      </div>
    </div>
  );
};
export default Home;
