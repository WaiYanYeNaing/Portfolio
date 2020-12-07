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

export default function SectionProjects() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{ marginTop: "2rem" }}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Do you want to see my awsome projects?</h2>
            <h4>
              You can go throught and see my project by clicking button below.
              Most of my project were created with Vue js, React js, Node js,
              .Netcore and others.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Link to="projects" className={classes.link}>
              <Button color="success" size="lg">
                See My Projects
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
