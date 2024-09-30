import { useState } from 'react'


function App() {
  let [counter, setCounter] = useState(0)

  const operate = (operation) => {
    const newCount = operation === 'add' ? counter + 1 : counter - 1;

    // Check for alert conditions and update count if within bounds
    if (newCount < 0) {
      alert('Count cannot be less than 0');
    } else if (newCount > 10) {
      alert('Count cannot be greater than 10');
    } else {
      setCounter(newCount);
    }
  }

  return (
    <>
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className='font-bold'>{counter}</h1>
      <h1 className="text-2xl font-bold">Counter</h1>
      <div className="flex space-x-4"> {/* Flex container for buttons */}
        <button onClick={()=> operate("add")} type="button" className="bg-blue-500 text-white px-4 py-2 rounded" >Add</button>
        <button onClick={()=> operate("sub")} type="button" className="bg-red-500 text-white px-4 py-2 rounded">Sub</button>
      </div>

    </div>
     
    </>
  )
}

export default App
