import Router from "./routes";
import GlobalStyle from "./styles/globalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
        <ToastContainer />
        <GlobalStyle />
        <Router />
    </>
  );
}

export default App;

//import './App.css';
//import NOUN from './PrincipalPage';

//function App() {
  //return (
    //<div className="App">
      //<h1>NOUN</h1>
      //<p>Viva sua verdadeira vida.</p>
     // <NOUN />
    //</div>
  //);
//}

//export default App;
