import './App.css';


import Header from './component/common/Header';
import Home from './Home';
import Login from './component/member/Login';


import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id='container'>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/member/login/" element={<Login />} />
            </Routes>
          </div>


        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
