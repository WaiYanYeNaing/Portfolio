import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import { PersonPinRounded, WorkRounded } from "@material-ui/icons";
import sanityClient from "../../../client.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();

  const [me, setMe] = useState({ detail: [], title: "" });
  const [myWork, setMyWork] = useState({ detail: [], title: "" });

  useEffect(() => {
    getMe();
    getMyWork();
  }, []);

  const getMe = async () => {
    await sanityClient
      .fetch(
        `*[_type == "me"]{
      title,
      detail, 
    }`
      )
      .then((res) => {
        setMe(res[0]);
      })
      .catch(console.error);
  };

  const getMyWork = async () => {
    await sanityClient
      .fetch(
        `*[_type == "myWork"]{
      title,
      detail, 
    }`
      )
      .then((res) => {
        setMyWork(res[0]);
      })
      .catch(console.error);
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color={"success"}
                horizontal={{
                  tabsGrid: { xs: 6, sm: 4, md: 2 },
                  contentGrid: { xs: 12, sm: 8, md: 10 },
                }}
                tabs={[
                  {
                    tabButton: me.title,
                    tabIcon: PersonPinRounded,
                    tabContent: (
                      <span>
                        {me.detail.map((v, i) => {
                          return (
                            <div key={i}>
                              <p>{v.children[0].text}</p>
                              <br />
                            </div>
                          );
                        })}
                      </span>
                    ),
                  },
                  {
                    tabButton: myWork.title,
                    tabIcon: WorkRounded,
                    tabContent: (
                      <span>
                        {myWork.detail.map((v, i) => {
                          return (
                            <div key={i}>
                              <p>{v.children[0].text}</p>
                              <br />
                            </div>
                          );
                        })}
                      </span>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
