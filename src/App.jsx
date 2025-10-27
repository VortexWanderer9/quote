import React from 'react'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [quote, setQuote] = useState('');
  const [moment, setNew] = useState(false); 
  const [loading, setLoading] = useState(false)
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
      <div className="quote-box flex items-center justify-center mt-6">
       {loading ? <h2>Loading............</h2> :
        <textarea
  className="text-center bg-gradient-to-r from-cyan-500 to-blue-500 p-4 font-bold w-full rounded"
  value={quote}
  readOnly
  rows={4} // number of lines visible
  style={{ resize: 'none' }} // optional: prevent resizing
/>}

      </div>
      <div onClick={() => setNew((moment) => !moment)} className="generate mt-7 p-2 rounded bg-linear-to-l from-orange-700 via-orange-500 to-orange-400 cursor-pointer">
        <span>Generate New</span>
      </div>
    </div>
    </>
  )
}

export default App