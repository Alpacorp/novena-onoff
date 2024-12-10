import * as React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Back = ({ url, src }) => {
  return (
    <Link to={url}>
      <img src={src} alt="volver" className="back" />
    </Link>
  );
};

Back.propTypes = {
  url: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Back;
