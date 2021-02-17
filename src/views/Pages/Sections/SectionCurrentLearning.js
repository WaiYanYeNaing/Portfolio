/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function SectionCurrentLearning() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Do you want to know what am I learning now?</h2>
            <h4>
              You can see what I am learning now. It will include Courses,
              YouTube videos, and others.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Link to="currentlearning" className={classes.link}>
              <Button color="primary" size="lg">
                See What Am I Learning
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
