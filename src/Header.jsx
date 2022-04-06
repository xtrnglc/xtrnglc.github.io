import './App.css';
import mainLogo from'./logowhite.png';

function Header() {
  return (
    <div className="Header" style={{position:'relative'}}>
      <header>
      <img  src={mainLogo} style={{display: 'inline-block', width: '80px', height: '80px'}}/>
        <h1 style={{display: 'inline-block'}}>
          Trung Le
        </h1>
        <p>
          Full Stack Software Engineer
        </p>
      </header>
    </div>
  );
}

export default Header;
