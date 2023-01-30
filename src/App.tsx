import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import ListComputerScreen from './Pages/Computer/ListComputerScreen';
import CreateComputerScreen from './Pages/Computer/CreateComputerScreen';
import ListProcessorsScreen from './Pages/Processor/ListProcessorsScreen';
import CreateProcessorScreen from './Pages/Processor/CreateProcessorScreen';
import ListComputerStateScreen from './Pages/State/ListComputerStateScreen';
import CreateComputerStateScreen from './Pages/State/CreateComputerStateScreen';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { darkTheme } from './css/darkTheme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme} >
      <Routes>
        <Route path='/' element={<ListComputerScreen/>}/>
        <Route path='/create-computer' element={<CreateComputerScreen/>}/>
        <Route path='/list-computer' element={<ListComputerScreen/>}/>

        <Route path='/list-users' element={<ListComputerScreen/>}/>
        <Route path='/create-users' element={<ListComputerScreen/>}/>

        <Route path='/list-processors' element={<ListProcessorsScreen/>}/>
        <Route path='/create-processor' element={<CreateProcessorScreen/>}/>

        <Route path='/list-states' element={<ListComputerStateScreen/>}/>
        <Route path='/create-state' element={<CreateComputerStateScreen/>}/>

      </Routes> 
      </ThemeProvider>
    </div>
  );
}

export default App;
