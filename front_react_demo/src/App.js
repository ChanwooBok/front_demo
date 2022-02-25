import logo from './logo.svg';
import './App.css';
import Demo_01_RunLife from './components/Demo_01_RunLife';
import Demo_02_useState_useRef from './components/Demo_02_useState_useRef';
import Demo_03_useRef from './components/Demo_03_useRef';
import Demo_04_useMemo from './components/Demo_04_useMemo';

function App() {
  return (
    <div className="App">
      {/*<Demo_01_RunLife />*/}
      <Demo_02_useState_useRef />
      {/* <Demo_03_useRef /> */}
      {/* <Demo_04_useMemo /> */}
    </div>
  );
}

export default App;
