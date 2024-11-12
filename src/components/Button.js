import PropTypes from 'prop-types';

const Button = ({ color, text, textColor }) => {
  return (
    <button style={{ backgroundColor: color, color: textColor }}>{text}</button>
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