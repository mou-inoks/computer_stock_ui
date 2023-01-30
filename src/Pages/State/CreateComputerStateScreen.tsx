import React from 'react'
import AccordionMenu from '../../Components/Accordion'
import Navbar from '../../Components/Navbar'
import CreateComputerStateForm from '../../Components/State/CreateComputerStateForm'

export default function CreateComputerStateScreen() {
  return (
    <div>
      <header className="App-header">
        <Navbar />
        <img src={require('../../imgs/logo.png')} />
      </header>
      <div id='accordion'>
        <AccordionMenu />
      </div>
      <CreateComputerStateForm /> 
    </div>

  )
}
