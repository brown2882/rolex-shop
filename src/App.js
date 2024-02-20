import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Shopp } from './pages/shop';
import { Main } from './pages/main';
import { Footer } from './pages/footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/shop'} element={<Shopp/>}/>
        <Route path={'/main'} element={<Main/>}/>
        <Route path={'/footer'} element={<Footer/>}/>

      </Routes>



    </div>
  );
}

export default App;
