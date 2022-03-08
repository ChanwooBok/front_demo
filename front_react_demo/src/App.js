import logo from './logo.svg';
import './App.css';
import Demo_01_RunLife from './components/Demo_01_RunLife';
import Demo_02_useState_useRef from './components/Demo_02_useState_useRef';
import Demo_03_useRef from './components/Demo_03_useRef';
import Demo_04_useMemo from './components/Demo_04_useMemo';
import Demo_05_useCallback from './components/Demo_05_useCallback';
// import Page from './components/Demo_06_props';
import Page from './components/Demo_07_useContext';
import Demo_08_useReducer from './components/Demo_08_useReducer';
import Demo_09_useReducer from './components/Demo_09_useReducer';
import PageContainer from './components/Demo_10_redux';

function App() {
  return (
    <div className="App">
      {/*<Demo_01_RunLife />*/}
      {/* <Demo_02_useState_useRef /> */}
      {/* <Demo_03_useRef /> */}
      {/* <Demo_04_useMemo /> */}
      {/* <Demo_05_useCallback /> */}
      {/* <Page /> */}
      {/* <Demo_08_useReducer /> */}
      {/* <Demo_09_useReducer /> */}
      <PageContainer />
    </div>
  );
}

export default App;
