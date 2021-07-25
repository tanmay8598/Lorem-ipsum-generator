import React, { useState } from "react"
import Data from "./Data"

const App = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleChange = (e) => {
    e.preventDefault()
    let amount = count
    if (count <= 0) {
      amount = 0
    }
    if (count > 8) {
      amount = 8
    }
    setText(Data.slice(0, amount))
  }

  return (
    <div className='card'>
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <div className='info'>
        <label>Paragraphs:</label>
        <input
          type='number'
          onChange={(e) => {
            setCount(e.target.value)
          }}
        ></input>
        <button onClick={handleChange}>GENERATE</button>
      </div>
      <div className='paragraph'>
        <p>
          {text.map((item, index) => {
            return <p key={index}>{item}</p>
          })}
        </p>
      </div>
    </div>
  )
}

export default App
