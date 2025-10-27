import React from 'react'
import './App.css'
import { useEffect, useState, useRef } from 'react'

function App() {
  const [quote, setQuote] = useState('');
  const [moment, setNew] = useState(false); 
  const [loading, setLoading] = useState(false);
  const quoteRef = useRef(null)
  const copyText = () =>{
    if(!quote) return;
     quoteRef.current?.select();
    window.navigator.clipboard
      .writeText(quote)
  }
  useEffect(() =>{
   Ifetch()
  }, [moment])
  const Ifetch = () =>{
    setLoading(true)
     fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then((data) => setQuote(data.slip.advice))
    .finally(setLoading(false))
  }
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-blue-700 font-bold text-2xl text-center'>Daily Quotes</h2>
      <div className="quote-box flex items-center flex-col justify-center mt-6 p-5 gap-4">
       {loading ? <h2>Loading............</h2> :
       <div className="text-center bg-gradient-to-r from-cyan-500 to-blue-500 p-4 font-bold rounded break-words">
  {quote}
</div>
}
<div className='cursor-pointer hover:opacity-50 w-fit' onClick={copyText} >
 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2Z" fill="#00b3ff" stroke="#fff"/><path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" fill="#00b3ff" stroke="#00b3ff"/></g></svg>
</div>
      </div>
      <div onClick={() => setNew((moment) => !moment)} className="generate mt-7 p-2 rounded bg-linear-to-l from-orange-700 via-orange-500 to-orange-400 cursor-pointer font-bold hover:bg-blue-200">
        <span>Generate New</span>
      </div>
    </div>
    </>
  )
}

export default App