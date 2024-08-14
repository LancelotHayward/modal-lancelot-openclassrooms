import logo from './logo.svg';
import './App.css';
import Modal from "./components/Modal/Modal.jsx"
import { useRef } from 'react'

function App() {
  const modal = useRef(null)
  return (
    <div className="App">
      <Modal text="Modal example" reference={modal}/>
    </div>
  );
}

export default App;
