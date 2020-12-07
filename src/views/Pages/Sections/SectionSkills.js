import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import React, { useState } from "react";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SectionSkills() {
  const classes = useStyles();

  const [progress, setprogress] = useState([
    { name: "HTML", value: 100, color: "primary" },
    { name: "CSS", value: 100, color: "info" },
    { name: "Javascript", value: 100, color: "success" },
    { name: "Vue", value: 100, color: "warning" },
    { name: "React", value: 75, color: "danger" },
    { name: "React Native", value: 75, color: "rose" },
    { name: "Vuetify", value: 100, color: "primary" },
    { name: "Material UI", value: 100, color: "info" },
    { name: "Node JS", value: 65, color: "success" },
    { name: "SQL", value: 75, color: "warning" },
    { name: ".NetCore", value: 80, color: "danger" },
    { name: "Tensorflow", value: 60, color: "rose" },
    { name: "Flutter", value: 30, color: "primary" },
  ]);

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
