import React, { useState } from 'react'

const BgChanger = () => {
    const [color, setColor] = useState('#213d61')
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
        <div className='flex flex-wrap justify-center gap-3 py-2 px-3 rounded-3xl bg-white'>
            <button onClick={()=> setColor("red")} className='outline-none px-4 py-2 rounded-3xl text-white'
             style={{backgroundColor: "red"}}>red
            </button>
            <button onClick={()=> setColor("green")} className='outline-none px-4 py-2 rounded-3xl text-white'
             style={{backgroundColor: "green"}}>green
            </button>
            <button onClick={()=> setColor("black")} className='outline-none px-4 py-2 rounded-3xl text-white'
             style={{backgroundColor: "black"}}>black
            </button>
            <button onClick={()=> setColor("yellow")} className='outline-none px-4 py-2 rounded-3xl '
             style={{backgroundColor: "yellow"}}>yellow
            </button>
        </div>
      </div>
    </div>
  )
}

export default BgChanger
