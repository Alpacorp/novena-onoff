import * as React from "react";
import PropTypes from "prop-types";

const DayImgDate = ({ image, textImage }) => {
  return (
    <div className="dayImg">
      <img src={image} alt={textImage} />
    </div>
  );
};

DayImgDate.propTypes = {
  image: PropTypes.string.isRequired,
  textImage: PropTypes.string.isRequired,
};

export default DayImgDate;
