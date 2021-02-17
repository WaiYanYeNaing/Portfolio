import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import React, { useState } from "react";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { makeStyles } from "@material-ui/core";
import sanityClient from "../../../client.js";
import { useEffect } from "react";

const useStyles = makeStyles(styles);

export default function SectionSkills() {
  const classes = useStyles();

  const [progress, setprogress] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "skillProgress"]{
      name,
      value,
      color,
    }`
      )
      .then((res) => {
        setprogress(res);
      })
      .catch(console.error);
  }, []);

  return (
    <div className={classes.section}>
      <div className={classes.container} style={{ marginTop: "2rem" }}>
        <div id="progress">
          <h3>MY SKILLS</h3>
          <br></br>
          <GridContainer>
            {progress.map((v, i) => (
              <GridItem xs={12} sm={12} md={6} key={i}>
                <div>
                  <p>{v.name}</p>
                </div>
                <CustomLinearProgress
                  variant="determinate"
                  color={v.color}
                  value={v.value}
                />
              </GridItem>
            ))}
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
