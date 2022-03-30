import './App.css';
import perfil from  "./img/perfil.png"
import {link} from 'react-router-dom';

function App() {
  return (
    <div className='main'>
      <div className='sub-main'>
        <div>
          <div className='imgs'>
            <div className='container-image'>
              <img src={perfil} alt="perfil" className='perfil'/>
            </div>
          </div>
          <div>
            <h1>LOGIN</h1>
            <div>
              <input type="text" placeholder='usuario' className='usuario' />
            </div>
            <div className='second-input'>
              <input type="text" placeholder='contraseña' className='contraseña' />
            </div>
            <div className='login-button'>
              <button>Login</button>
            </div>
            <div className='link'>
              <p>
                <a href="#">Forgot password ?</a> Or <a href="/SignUp"> Sign Up</a>
              </p>
            </div>
            <registrate/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
