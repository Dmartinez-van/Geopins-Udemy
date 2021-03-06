import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import NoContent from "./Pin/NoContent";
import CreatePin from "./Pin/CreatePin";
import Context from "../context";
import PinContent from "./Pin/PinContent";

const Blog = ({ classes }) => {
  const { state } = useContext(Context);
  const { draft, currentPin } = state;

  let BlogContent;
  if (!draft && !currentPin) {
    // no content
    BlogContent = NoContent;
  } else if (draft && !currentPin) {
    // create pin
    BlogContent = CreatePin;
  } else if (!draft && currentPin) {
    BlogContent = PinContent;
  }

  return (
    <Paper className={classes.root}>
      {" "}
      <BlogContent />{" "}
    </Paper>
  );
};

const styles = {
  root: {
    minWidth: 350,
    maxWidth: 400,
    paddingTop: "64px",
    maxHeight: "100vh",
    overflowY: "scroll",
    display: "flex",
    justifyContent: "center",
  },
  rootMobile: {
    maxWidth: "100%",
    maxHeight: 300,
    overflowX: "hidden",
    overflowY: "scroll",
  },
};

export default withStyles(styles)(Blog);
