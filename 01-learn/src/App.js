import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className='heder'>
        <img src='https://image.pngaaa.com/828/105828-middle.png'/>
        </header>
        <nav className='nav'>
          <div><a href='#a' >Profile</a></div>
          <div><a href='#b' >Masseges</a></div>
          <div><a href='#c'>News</a></div>
        </nav>
        <div className='content'>
          <div>
            <img src='https://i.pinimg.com/originals/0f/ab/7b/0fab7b5b292820bcd560a44b744597a2.jpg'></img>   
          </div>  
          <div className='ava'>
            <img src='https://image.pngaaa.com/828/105828-middle.png'></img>
            Yuor profile
          </div>
          <div>new post</div>
          <div>post</div>
          <div>old post</div>
          <div>post</div>
        </div>
    </div>
  );
}

export default App;
