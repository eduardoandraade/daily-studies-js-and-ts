import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <br></br>
        <Link to='contact'>Contact</Link>
    </nav>
  )
}

export default Navbar