import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {NavLink} from 'react-router-dom';
import './main.css';

const navbar = () => {
  return (
   <div className='navbar'>
    <div className="flex-btwn navbar-container">
        {/* <div className="hamberger"><GiHamburgerMenu />
</div> */}
        <h2 className="logo">Sneha Goyal</h2>
        <ul className="flex-btwn nav-list">
            <li>Services</li>
            <li>Technologies</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <ul className="flex-btwn social">
            <li><FaSquareGithub /></li>
            <li><FaLinkedin /></li>
        </ul>
    </div>
   </div>
  )
}

export default navbar