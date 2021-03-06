import React, { useEffect, useState } from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import landing from "assets/img/landing.jpg";
import profile from "assets/img/profile.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";
import sanityClient from "../../../client.js";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();

  const [projects, setprojects] = useState([]);

  useEffect(() => {
    getProject();
  }, []);

  const getProject = async () => {
    await sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      projectLink,
      "mainImageURL": mainImage.asset->url
    }`
      )
      .then((res) => {
        setprojects(res);
      })
      .catch(console.error);
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          {projects.map((v, i) => (
            <GridItem
              xs={12}
              sm={12}
              md={5}
              key={i}
              style={{ marginTop: "80px" }}
            >
              <a target="_blank" href={v.projectLink}>
                <img
                  src={v.mainImageURL}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  {v.title}
                </Button>
              </a>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
