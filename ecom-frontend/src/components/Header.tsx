import { set } from 'firebase/database';
import {useState} from 'react';
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const user = { _id: "gdfg",role : "admn" };

const Header = () => {

    const [isOpen ,setIsOpen] = useState<boolean> (false);
    const logoutHandler = () =>{
        setIsOpen(false);
    }

  return (
    <nav className='header'>
      <Link onClick={()=> setIsOpen(false)} to={"/"}>Home</Link>
      <Link onClick={()=> setIsOpen(false)} to={"/search"}>
        Search
        <FaSearch />
      </Link>
      <Link onClick={()=> setIsOpen(false)} to={"/cart"}>
        Cart
        <FaShoppingBag />
      </Link>
      {/* if user logged in */}
      {user?._id ? (
        <>
        <button onClick={()=> setIsOpen((prev) => !prev)}>

        <FaUser />
        </button>
        <dialog open={isOpen}>
            <div>
                {user.role === "admin" &&(
                    <Link onClick={()=> setIsOpen(false)} to="/admin/dashboard">Admin</Link>
                )}

                <Link onClick={()=> setIsOpen(false)} to="/orders">Orders</Link>
                <button onClick={logoutHandler}>
                    <FaSignOutAlt />
                </button>
            </div>
        </dialog>
        </>
      ) : (
        <Link to={"/logins"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
