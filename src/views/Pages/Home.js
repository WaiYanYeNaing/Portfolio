import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import React from "react";
import styles from "assets/jss/material-kit-react/views/components.js";
import { makeStyles } from "@material-ui/core";
import Parallax from "components/Parallax/Parallax";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Quote from "components/Typography/Quote";
import { c4 } from "views/Themes/Colors";
import SectionMe from "views/Pages/Sections/SectionMe";
import SectionSkills from "./Sections/SectionSkills";
import SectionProjects from "./Sections/SectionProjects";
import classNames from "classnames";
import SectionCurrentLearning from "./Sections/SectionCurrentLearning";
import SectionLearningCompleted from "./Sections/SectionLearningCompleted";

const useStyles = makeStyles({
  ...styles,
  quote_container: {
    marginTop: "50px",
  },
});

export default function Home(props) {
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
                <h1 className={classes.title}>INFORMATION</h1>
                <br></br>
                <h1 className={classes.title}>ABOUT</h1>
                <span
                  style={{ fontSize: "150px", fontWeight: "bolder", color: c4 }}
                >
                  ME
                </span>
              </div>

              <div className={(classes.typo, classes.quote_container)}>
                <Quote
                  text="Between the great things we cannot do and the small things we will not do, the danger is that we shall do nothing."
                  author=" Adolph Monod"
                  color={c4}
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* Detail about Me */}
        <SectionMe />

        {/* My Skill */}
        <SectionSkills />

        {/* My Projects */}
        <SectionProjects />

        {/* My Current Learning */}
        <SectionLearningCompleted />

        {/* My Current Learning */}
        <SectionCurrentLearning />
      </div>
    </div>
  );
}

const ss = {
  quote: {
    color: "red",
    textAlign: "left",
  },
};
