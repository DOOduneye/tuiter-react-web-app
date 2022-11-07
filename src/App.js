import './App.css';
import Labs from './labs/index.js';
import HelloWorld from "./labs/a6/hello-world";
import Assignment7 from "./labs/a7"
import Tuiter from "./tuiter/Tuiter";

import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

const App = () => {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route index element={<Labs />}/>
                  <Route path="/a7" element={<Assignment7 />} />
                  <Route path="/hello" element={<HelloWorld />}/>
                  <Route path="/tuiter" element={<Tuiter />}/>
                  <Route path="/tuiter/*" element={<Tuiter />}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
