import './App.css';
import Labs from './labs/index.js';
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter/Tuiter";
import Home from "./tuiter/Home";

import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

const App = () => {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route index element={<Labs/>}/>
                  <Route path="/hello" element={<HelloWorld/>}/>
                  <Route path="/explore" element={<Tuiter />}/>
                  <Route path="/tuiter" element={<Home />}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
