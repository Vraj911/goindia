
import React from 'react'
import  AshokaChakra  from '../assets/Ashoka_Chakra.svg';
import supabase from '../../../../supabaseClient';
function Navbar() {
  const signOut=async()=>{
  
    supabase.auth.signOut();
  }
  return (
    <div className="navbar bg-gradient-to-br text-white  from-orange-500 to-red-600 shadow-sm">
  <div className="navbar-start">
   <img src={AshokaChakra} className='w-10 h-10 animate-spin'/>
      <a className="btn btn-ghost text-xl">GoIndia</a>
    </div>
    
    <div className="navbar-end">
  <button onClick={() => navigate('/college')} className="btn mx-1 bg-india-navy-blue"><p className="">Colleges</p></button>
        <a className="btn bg-india-navy-blue">Post your own product</a>
      <a className="btn bg-india-navy-blue mx-1">Become Investor</a>
    </div>
  </div>
    )
  }

  
  <div className="navbar-end">
    <a className="btn mx-1 bg-india-navy-blue">Colleges</a>
    <a className="btn bg-india-navy-blue">Post your own product</a>
    <a className="btn bg-india-navy-blue mx-1">Become Investor</a>
    <a className="btn bg-india-navy-blue mx-1"
    onClick={signOut}
    >Signout</a>
  </div>
</div>
  )
}

  export default Navbar