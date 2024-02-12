import { HashRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/layout/navbar';
import { Button } from './components/ui/button';

import Form from './pages/Form';

function App() {

  return (
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
          path="/"
          element={
            <h1 className='text-blue text-5xl'>Home</h1>} />
      </Routes>
    </HashRouter>
  )
}

export default App;
