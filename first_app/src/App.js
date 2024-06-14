import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

// #FFB18A #7B5A6D #8FAABB #3D5D6B #B28986
// <a target="_blank" href="https://icons8.com/icon/mKtR0FRkBY79/eye">просмотр</a> иконка от <a target="_blank" href="https://icons8.com">Icons8</a>

const link=['/profile','/']
function App() {
  return (
    <BrowserRouter>

      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
          <Route path='/' element={<News />} />
            <Route path='/dialogs/*' element={<Dialogs />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
