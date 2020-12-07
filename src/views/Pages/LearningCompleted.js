import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import React from "react";
import styles from "assets/jss/material-kit-react/views/components.js";
import { makeStyles } from "@material-ui/core";
import Parallax from "components/Parallax/Parallax";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import { c4 } from "views/Themes/Colors";
import SectionProjects from "./ProjectsSections/SectionProjects";
import classNames from "classnames";
import SectionCompleted from "./LearningCompletedSection/SectionCompleted";

const useStyles = makeStyles({
  ...styles,
  quote_container: {
    marginTop: "50px",
  },
});

export default function LearningCompleted(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      {/* Header */}
      <Header
        brand="Wai Yan Ye Naing"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />

      {/* Background Parallax Image */}
      <Parallax image={require("assets/img/bg8.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title} style={{ marginBottom: "30px" }}>
                  MY
                </h1>
                <span
                  style={{
                    fontSize: "150px",
                    fontWeight: "bolder",
                    color: c4,
                  }}
                >
                  LearningProgress
                </span>
                <br></br>
                <br></br>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that{"'"}s why we added this text here. Add here
                  all the information that can make you or your product create
                  the first impression.
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* Projects */}
        <SectionCompleted />
      </div>
    </div>
  );
}
