import './App.css';
import Labs from './labs/index.js';
import Assignment6 from './labs/a6';
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter/Tuiter";
import Home from "./tuiter/Home";

import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Assignment7 from './labs/a7';

const App = () => {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route index element={<Assignment6 />}/>
                  <Route path="a7" element={<Assignment7 />}/>
                  <Route path="hello" element={<HelloWorld/>}/>
                  <Route path="tuiter" element={<Home />}/>
                  <Route path="explore" element={<Tuiter />}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
