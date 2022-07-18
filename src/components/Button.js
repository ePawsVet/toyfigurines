import PropTypes from 'prop-types'

const Button = ({ text, color, className,onClick}) => {
  return (
    <button
    className={className}
    style = {{backgroundColor : color}}
    onClick = {onClick}
    >
        {text}
    </button>
  )
}

Button.defaultProps = {
    color : 'gray'
}

Button.propTypes = {
    color   : PropTypes.string,
    text    : PropTypes.string,
    onClick : PropTypes.func
}
export default Button