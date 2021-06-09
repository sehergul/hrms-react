//Ana component

//App.js aslında bir fonksiyondur
//ve bu fonksiyon direkt olarak return'e sahip
//return'e yazılan kod jsx'tir

//return içine yazılan componentler görünür

import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Navi/>
        <Container className="main">
          <Dashboard />
        </Container>
    </div>
  );
}

export default App;
