import './App.css';
import { Routes, Route, Switch } from "react-router-dom"
import RegistrationForm from './component/RegistrationForm';
import Completed from './component/RegistrationForm/Completed';
import EmailVerify from './component/RegistrationForm/Email_verify';
import Thanks from './component/RegistrationForm/Thanks';
import { MultiStepForm } from './StepForm';
import Routing from './routes';

function App() {
  return (
    <div className="App">
      {/* <MultiStepForm /> */}
      {/* <RegistrationForm /> */}
      {/* <Thanks /> */}
      {/* <EmailVerify /> */}
      {/* <Completed /> */}
      <Routing />
    </div>
  );
}

export default App;
