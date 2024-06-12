import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';

// #FFB18A #7B5A6D #8FAABB #3D5D6B #B28986
// <a target="_blank" href="https://icons8.com/icon/mKtR0FRkBY79/eye">просмотр</a> иконка от <a target="_blank" href="https://icons8.com">Icons8</a>


function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <NavBar/>
      <Profile/>
    </div>
  );
}

export default App;
