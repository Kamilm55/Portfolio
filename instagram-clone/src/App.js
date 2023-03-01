import './App.css';
import Register from './auth/Register';
import SignIn from './auth/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route , Routes } from 'react-router-dom'
import Main from './components/Main';
import {ChakraProvider} from '@chakra-ui/react'
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       
        <ChakraProvider>
        <Routes>
            <Route path='/' element={<SignIn />}></Route>
            <Route path='/main' element={<Main />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </ChakraProvider>
          
       </BrowserRouter>
       
        
      </header>

    </div>
  );
}

export default App;
