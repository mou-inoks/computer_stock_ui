import React from 'react'
import AccordionMenu from '../../Components/Accordion'
import CreateComputerForm from '../../Components/Computers/CreateComputerForm'
import Navbar from '../../Components/Navbar'
import CreateProcessorForm from '../../Components/Processors/CreateProcessorForm'

export default function CreateProcessorScreen() {
  return (
    <div>
      <header >
        <img src={require('../../imgs/logo.png')} />
        <Navbar />
      </header>
      <div id='accordion'>
        <AccordionMenu />
      </div>
      <CreateProcessorForm />
    </div>

  )
}
