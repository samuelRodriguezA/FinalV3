import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import PropTypes from "prop-types";
import Styles from "../Styles";

export default function Home() {
  const [open, setOpen] = useState(false);
  const clickSubmit = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  Home.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  };
  return (
    <>
      <Styles />
      <main>
        <section id="intro">
          <div className="intro-text">
            <img
              src="/images/logo.png"
              alt="Filatino Logo"
              width="300px"
              height="300px"
            />
            <h1>Welcome to the Country Trivia Website!</h1>
            <p>To start you can Log In, Sign Up or Continue as guest!</p>
          </div>
          <div className="startoptions">
            <div className="startoptions-row">
              <Link to="/signin" className="flag-link">
                <Button color="primary" variant="contained">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button color="primary" variant="contained">
                  Sign Up
                </Button>
              </Link>
            </div>
            <div className="startoptions-row">
              <Button color="primary" variant="contained" onClick={clickSubmit}>
                Continue as guest
              </Button>
            </div>

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Guest</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  The score you get on the trivias won't be saved.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Link to="/signup">
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleClose}
                  >
                    Sign Up
                  </Button>
                </Link>
                <Link to="/main">
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleClose}
                  >
                    Continue
                  </Button>
                </Link>
              </DialogActions>
            </Dialog>
          </div>
        </section>
      </main>
    </>
  );
}
