import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App(props) {
  return (
    <BrowserRouter>

      <div className="app-wrapper">
        <Header />
        <NavBar pages = {props.state.pages.navBar} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs dialogPage = {props.state.dialogPage}/>} />
            <Route path='/profile' element={<Profile profile ={props.state.profilePage} />} />
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
