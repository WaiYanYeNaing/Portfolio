import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-kit-react/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Quote(props) {
  const { text, author, color } = props;
  const classes = useStyles();
  return (
    <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
      <p
        className={classes.quoteText}
        style={{ color: color ? color : "", fontSize: 17 }}
      >
        {text}
      </p>
      <small
        className={classes.quoteAuthor}
        style={{ fontSize: 16, color: color ? color : "" }}
      >
        {author}
      </small>
    </blockquote>
  );
}

Quote.propTypes = {
  text: PropTypes.node,
  author: PropTypes.node,
};
