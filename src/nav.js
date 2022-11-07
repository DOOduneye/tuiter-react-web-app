import {Link} from "react-router-dom";

function Nav() {
 return (
   <div>
     <Link index >Labs</Link> |
     <Link index >Assignment 6</Link> |
     <Link to="a7">Assignment 7</Link> |
     <Link to="/tuiter">Tuiter</Link> |
     <Link to="/explore">Explore</Link>
   </div>
 );
}

export default Nav;
