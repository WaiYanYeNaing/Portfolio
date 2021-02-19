import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import studio6 from "assets/img/examples/studio-6.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import sanityClient from "../../../client.js";
import { Button } from "@material-ui/core";
import { Camera, Favorite } from "@material-ui/icons";
import YouTubeIcon from "@material-ui/icons/YouTube";
// @material-ui/icons
import YouTube from "react-youtube";

const useStyles = makeStyles(styles);

export default function SectionCompleted(props) {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const [pluralsight, setPluralsight] = useState([]);
  const [youTube, setYouTube] = useState([]);
  const opts = {
    width: "300",
    height: "200",
    playerVars: {
      autoplay: 0,
    },
  };

  useEffect(() => {
    getPluralsight();
    getYouTube();
  }, []);

  const getPluralsight = async () => {
    await sanityClient
      .fetch(
        `*[_type == "pluralsight"]{
      title,
      "certificateURL": certificate.asset->url,
      "mainImageURL": mainImage.asset->url
    }`
      )
      .then((res) => {
        setPluralsight(res);
      })
      .catch(console.error);
  };

  const getYouTube = async () => {
    await sanityClient
      .fetch(
        `*[_type == "youTube"]{
      title,
      videoId, 
    }`
      )
      .then((res) => {
        setYouTube(res);
      })
      .catch(console.error);
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem
          xs={12}
          sm={12}
          md={10}
          className={classes.navWrapper}
          style={{ marginTop: "5rem" }}
        >
          <NavPills
            alignCenter
            color="primary"
            tabs={[
              {
                tabButton: "PluralSight",
                tabIcon: Camera,
                tabContent: (
                  <GridContainer justify="center">
                    {pluralsight.map((v, i) => (
                      <a target="_blank" href={v.certificateURL} key={i}>
                        <GridItem xs={12} sm={12} md={12}>
                          <img
                            src={v.mainImageURL}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </a>
                    ))}
                  </GridContainer>
                ),
              },
              {
                tabButton: "YouTube",
                tabIcon: YouTubeIcon,
                tabContent: (
                  <GridContainer justify="center">
                    {youTube.map((v, i) => (
                      <GridItem xs={12} sm={12} md={4} key={i}>
                        <YouTube videoId={v.videoId} opts={opts} />
                      </GridItem>
                    ))}
                  </GridContainer>
                ),
              },
              {
                tabButton: "Favorite",
                tabIcon: Favorite,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                      <img alt="..." src={work4} className={navImageClasses} />
                      <img
                        alt="..."
                        src={studio3}
                        className={navImageClasses}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <img alt="..." src={work2} className={navImageClasses} />
                      <img alt="..." src={work1} className={navImageClasses} />
                      <img
                        alt="..."
                        src={studio1}
                        className={navImageClasses}
                      />
                    </GridItem>
                  </GridContainer>
                ),
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
