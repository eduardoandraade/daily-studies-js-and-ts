import PropTypes from 'prop-types'


const Input = (props) => {
  return (
    <input 
    type="number" 
    id='passwordSize'
    min={1}
    value={props.passwordSize} 
    onChange={(ev) => props.setPasswordSize(+ev.target.value)}
    />
    )
  }
  
  Input.propTypes = {
      passwordSize: PropTypes.number.isRequired,
      setPasswordSize: PropTypes.func
  }

export default Input