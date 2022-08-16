import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
