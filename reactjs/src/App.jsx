import { HashRouter, Route, Routes } from 'react-router-dom';
import { Web3Provider } from "./Web3Provider";

import Navbar from './components/layout/navbar';
import { Button } from './components/ui/button';
import Landing from './pages/Landing';
import Form from './pages/Form';
import EmailForm from './pages/EmailForm';

function App() {

  return (
    <Web3Provider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route
            path="/test"
            element={
              <Button>Click me</Button>} />
          <Route
            path="/form"
            element={<Form />} />
          <Route
            path="/emailform"
            element={<EmailForm />} />
          <Route
            path="/"
            element={<Landing /> } />
        </Routes>
      </HashRouter>
    </Web3Provider>
  )
}

export default App;
