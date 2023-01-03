// import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import Screen from './screen/Screen';
import Map from './screen/Map';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from "react-alert-template-basic";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 2500,
  offset: '10px',
  transition: transitions.FADE
}

const App = () => {
  return (
      <AlertProvider template={AlertTemplate} {...options}>
        <Screen />
        <Map />
      </AlertProvider>
  );
};

export default App;