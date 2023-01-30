import React from 'react'
import { Computer } from './ComputerQuerys'
import '../../css/Details.css'

interface DetailsComputerProps {
 computer: Computer
}

const DetailsComputer = (value: DetailsComputerProps) => {
 return (
 <>
  <div className='details'>Name: {value.computer.name}</div>
  <div className='details'>Type: {value.computer.type?.type}</div>
  <div className='details'>Brand: {value.computer.brand}</div>
  <div className='details'>Processor: {value.computer.processor?.name} {value.computer.processor?.niveau} {value.computer.processor?.vitesse} </div>
  <div className='details'>Brand: {value.computer.brand}</div>
  <div className='details'>Ram: {value.computer.ram}Go</div>
  <div className='details'>State: {value.computer.state?.state}</div>
  <div className='details'>Comment: {value.computer.comment}</div>
 </>

 )
}

export default DetailsComputer