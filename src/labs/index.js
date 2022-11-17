import Nav from "../nav";
import Assignment6 from "./a6";
import Assignment7 from "./a7";
<<<<<<< HEAD
import { Routes, Route } from 'react-router'

const Labs = () => {
    return(
        <div>
            <Nav />
            <Routes>
                <Route index element={<Assignment6 />} />
                <Route path="a7" element={<Assignment7 />} />
            </Routes>
        </div>
    )
=======
import {Routes, Route} from "react-router";

function Labs() {
 return (
   <div>
      <Nav /> 
      <Routes>
        <Route index element={<Assignment6/>}/>
        <Route path="a7" element={<Assignment7/>}/>
      </Routes>
   </div>
 );
>>>>>>> 6a2f1ecdae064d719e76a8b9cf1695befc54a371
}

export default Labs;