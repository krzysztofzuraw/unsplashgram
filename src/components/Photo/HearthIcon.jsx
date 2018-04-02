import React from "react";
import PropTypes from "prop-types";

const HearthIcon = props => {
  const { width, height, onClickHandler } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={width}
      height={height}
      className="photo-hearth"
      onClick={onClickHandler}
    >
      <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
    </svg>
  );
};

HearthIcon.PropTypes = {
  width: PropTypes.number,
  height: PropTypes.height,
  onClickHandler: PropTypes.func
};

export default HearthIcon;
