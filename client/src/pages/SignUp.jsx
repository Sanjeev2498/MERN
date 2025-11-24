import {useState} from 'react';
import {Link} from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] =useState({});
  const [error,setError]=useState(false)
  const [loading,setLoading]=useState(false)
  const handleChange =(e) =>{
    setFormData({ ...formData, [e.target.id]:e.target.value});
  }
  // PROXY 
  //Alternative of Axios
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true);
    try{
      const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);  
      setLoading(false);
      if (data.success === false){
        setError(true);
        return;
      }
      // setError(false);
      // console.log(data);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError(true);
    }
    
    
  };
  
  
  return (
    <div className='p-3 max-w-lg mx-auto '>

      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text"
        placeholder='Username'
        id ='username' 
        className='bg-slate-100 p-3 rounded-lg' 
        onChange={handleChange} />

        <input type="email" 
        placeholder='Email' 
        id='email' 
        className='bg-slate-100 p-3 rounded-lg' 
        onChange={handleChange} />

        <input type="password" 
        placeholder='Password' 
        id='password' 
        className='bg-slate-100 p-3 rounded-lg' 
        onChange={handleChange} />

        <button  disabled={loading} className='bg-slate-400 p-3 rounded-lg uppercase hover:opacity-90'> {loading ? 'Loading...': 'Sign Up'}</button>
           
      </form>
      <div className="text-3l text-center font-semibold my-7">
      <p>Have an Account ?</p>
      <Link to="/sign-in">
      <span className='text-blue-500 p-3 rounded-lg'>Sign In</span>
      </Link>
      </div>
      <p className='text-red-700 mt-5 p-3 text-3l text-center rounded-lg'>{error && 'Something went wrong !'}</p><p></p>
    </div>
  )
}
