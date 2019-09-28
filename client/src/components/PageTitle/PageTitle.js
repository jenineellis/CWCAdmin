import React from "react";
import { Button } from "@material-ui/core";
import style from "./styles";
import { Typography } from "../Wrappers";

export default function PageTitle(props) {
  var classes = style();

  return (
    <div className={classes.pageTitleContainer}>
      <Typography className={classes.typo} variant="h1" size="sm">
        {props.title}
      </Typography>
      {props.button && (
        <Button
          classes={{ root: classes.button }}
          variant="contained"
          size="large"
          color="secondary">
          {props.button}
        </Button>
      )}
    </div>
  );
}
