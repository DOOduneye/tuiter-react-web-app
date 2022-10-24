import './App.css';
import Labs from './labs/index.js';
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter/Tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

const App = () => {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route index
                         element={<Labs/>}/>
                  <Route path="/hello"
                         element={<HelloWorld/>}/>
                  <Route path="/tuiter"
                         element={<Tuiter/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
