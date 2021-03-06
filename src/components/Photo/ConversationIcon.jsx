import React from "react";
import PropTypes from "prop-types";

const ConversationIcon = props => {
  const { width, height } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={width}
      height={height}
      className="comments-icon"
    >
      <path d="M17 11v3l-3-3H8a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1zm-3 2v2a2 2 0 0 1-2 2H6l-3 3v-3H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h2v3a4 4 0 0 0 4 4h6z" />
    </svg>
  );
};

ConversationIcon.PropTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default ConversationIcon;
