import React from "react";
import PropTypes from "prop-types";

function ColorBox(props) {
    const { color } = props;
    return (
        <div className="color-box" style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>
    );
}

ColorBox.propTypes = {
    color: PropTypes.string.isRequired,
    rounded: PropTypes.bool,
};
ColorBox.defaultProps = {
    rounded: true,
};
export default ColorBox;