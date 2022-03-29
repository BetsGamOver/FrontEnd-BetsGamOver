import perfil from './img/perfil.png';
import candado from './img/icono-candado.png';
import './App.css';

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
            <div>
              <input type="text" placeholder='contraseña' className='contraseña' />
            </div>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
