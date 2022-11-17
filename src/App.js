import './App.css';
import Labs from './labs/index.js';
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter/Tuiter";
import Home from "./tuiter/Home";

import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

const App = () => {
<<<<<<< HEAD
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index element={<Labs/>}/>
                    <Route path="/*" element={<Labs/>}/>
                    <Route path="/hello" element={<HelloWorld/>}/>
                    <Route path="/tuiter" element={<Tuiter/>}/>                       
            </Routes>
        </div>
    </BrowserRouter>
);  
=======
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route index element={<Labs/>}/>
                  <Route path="/*" element={<Labs/>}/>
                  <Route path="/hello" element={<HelloWorld/>}/>
                  <Route path="/explore" element={<Tuiter />}/>
                  <Route path="/tuiter" element={<Home />}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
>>>>>>> 6a2f1ecdae064d719e76a8b9cf1695befc54a371
}

export default App;
