import { useState } from 'react'
import './App.css'

// What is state?
// some data that changes over time
// when the data changes, our app should update

// let state = {
//   count: 0,
//   condition: true,
//   showMenu: true
// }

// state.showMenu = !state.showMenu

function App () {
  const [count, setCount] = useState(0)
  const [showMenu, setShowMenu] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <h1 className='count'>Count: {count}</h1>

      <button
        onClick={() => {
          setShowMenu(!showMenu)
        }}
      >
        {showMenu ? 'HIDE MENU' : 'SHOW MENU'}
      </button>

      {/* {hungry ? (
        <h2
          onClick={() => {
            setHungry(false)
          }}
        >
          I'm hungry
        </h2>
      ) : (
        <h2
          onClick={() => {
            setHungry(true)
          }}
        >
          I'm full
        </h2>
      )} */}

      {showMenu ? (
        <div className='buttons'>
          <button
            className='button button-down'
            onClick={() => {
              setCount(count - 1)
            }}
          >
            -
          </button>
          <button
            className='button button-up'
            onClick={() => {
              setCount(count + 1)
            }}
          >
            +
          </button>
          <button
            className='button'
            onClick={() => {
              setCount(count + 10)
            }}
          >
            +10
          </button>
          <button
            className='button'
            onClick={() => {
              setCount(0)
            }}
          >
            RESET
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default App
