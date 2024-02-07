import { HashRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { Button } from './components/ui/button';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/test"
          element={
            <Button>Click me</Button>} />
        <Route
          path="/"
          element={
            <h1 className='text-blue text-5xl'>Home</h1>} />
      </Routes>
    </HashRouter>
  )
}

export default App;
