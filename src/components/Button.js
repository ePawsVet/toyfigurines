import PropTypes from 'prop-types'

const ButtonForm = ({ text, color, className,onClick}) => {
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

ButtonForm.defaultProps = {
    color : 'gray'
}

ButtonForm.propTypes = {
    color   : PropTypes.string,
    text    : PropTypes.string,
    onClick : PropTypes.func
}
export default ButtonForm