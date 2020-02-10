import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ReactComponent as GithubIcon } from './github-brands.svg'
import Board from './components/Board'
import Modal from './components/Modal'

function App() {
  let counter = useSelector(state => state.counter)
  let isDone = useSelector(state => state.isDone)
  const dispatch = useDispatch()
  
  return (
    <>
      <h1 className="text-center">Welcome to flood it game!</h1>
      <div className="frame text-center mb">Click on a color and fill the entire board with one color with 25 flood fills or less.</div>
      <div className="flex frame mb">
        <div>Fills {`${counter}/25`}</div>
        <button className="btn" onClick={()=> dispatch({type: "reset"})}>New game</button>
      </div>
      <div className="frame mb">
        <Board />
      </div>
      <div className="text-sm text-center mb">
        Made by: <GithubIcon className="icon"/> <a href="https://github.com/kharandziuk" rel="noopener noreferrer" target="_blank">Kharandziuk</a> &amp; <GithubIcon className="icon"/> <a href="https://github.com/hypersnob" target="_blank" rel="noopener noreferrer">Hypesnob</a>
      </div>
      <Modal isDone={isDone} />
    </>
  )
}

export default App;