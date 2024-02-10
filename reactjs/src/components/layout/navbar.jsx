import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-between'>
      <div mr="4">
        <Link to="/">
          <h1 className='text-2xl'>
            ZK Mail List
          </h1>
        </Link>
      </div>
      <div>
        <Link className='mr-3 hover:underline hover:text-slate-400' to="/">Home</Link>
        <Link className='hover:underline  hover:text-slate-400'to="/test">Test</Link>
      </div>
    </div>
  )
}

export default Navbar;