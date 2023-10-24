import PropTypes from 'prop-types'

Input.PropTypes = {
    passwordSize: PropTypes.number.isRequired,
    setPasswordSize: PropTypes.func
}

const Input = (props) => {
  return (
    <input 
    type="number" 
    id='passwordSize'
    min={1}
    value={props.passwordSize} 
    onChange={(ev) => props.setPasswordSize(ev.target.value)}
    />
)
}

export default Input