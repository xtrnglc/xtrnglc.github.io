import './App.css';
import mainLogo from'./logowhite.png';

function Header() {
  return (
    <div className="Header" style={{position:'relative'}}>
      <header>
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
