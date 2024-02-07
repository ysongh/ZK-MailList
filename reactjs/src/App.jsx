import { HashRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/test"
          element={
            <h1>Test</h1>} />
        <Route
          path="/"
          element={
            <h1 className='text-blue text-5xl'>Home</h1>} />
      </Routes>
    </HashRouter>
  )
}

export default App;
