import { Link } from "react-router-dom"
export default function Header() {
  return (
    <div className="bg-slate-200 p-3">
      <div className='flex justify-between  itemmax-w-7xl mx-auto p-3'>
        <Link to="/">
        <h1 className='font-bold  max-w-6xl mx-auto p-3'></h1>
        </Link>
        
        <ul className='flex gap-4'>
          <Link to="/">
          <li>Home</li>
          </Link>
          <Link to="/about">
          <li>About</li>
          </Link>
          <Link to="/sign-in">
          <li>Sign In</li>
          </Link>
        </ul>
        
      </div>
    </div>
  )
}
