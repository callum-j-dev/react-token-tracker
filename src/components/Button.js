import PropTypes from 'prop-types';

const Button = ({ color, text, textColor, buttonType, onClick }) => {
  return (
    <button style={{ backgroundColor: color, color: textColor }} className={buttonType} onClick={onClick}>{text}</button>
  )
}

Button.defaultProps = {
    text: 'Click Me',
    color: 'indigo',
    textColor: 'black',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button