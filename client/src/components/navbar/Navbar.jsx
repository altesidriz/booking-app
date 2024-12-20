import { Link } from 'react-router-dom';
import './navbar.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const { user } = useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none", fontSize: "24px" }}>
          <span className="logo">Hotels<span style={{ fontSize: '10px' }}>.com</span></span>
        </Link>

        {user ? (
          <div className="navItems">
            <button className='navButton'
            onClick={()=>setMenu(!menu)}
            ><span>Welcome, {user.username} &#11206;</span></button>
            {menu && <div className='navMenu'>
                <Link to='/create'>List your property</Link>
                <Link to='/create'>My Bookings</Link>
                <span to='javascript:void(0)'>Logout</span>
            </div>}
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton"><Link to='/register'>Register</Link></button>
            <button className="navButton"><Link to='/login'>Login</Link></button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar