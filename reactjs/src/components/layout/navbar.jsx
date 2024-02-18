import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-between px-5 py-2'>
      <div mr="4">
        <Link to="/">
          <h1 className='text-2xl'>
            Mail List
          </h1>
        </Link>
      </div>
      <div>
        <Link className='mr-3 hover:underline hover:text-slate-400' to="/">Home</Link>
        <Link className='mr-3 hover:underline hover:text-slate-400' to="/dashboard">Dashboard</Link>
        <Link className='mr-3 hover:underline hover:text-slate-400' to="/form">Form</Link>
        <Link className='hover:underline  hover:text-slate-400'to="/test">Test</Link>
      </div>
    </div>
  )
}

export default Navbar;