import './registrate.css';

function registrate(){
    return(
        <div className="main">
            <h1>SIGN UP</h1>
            <div>
                <input type="text" placeholder='Nombre' className='cajas' />
                <input type="text" placeholder='Apellido' className='cajas' />
                <input type="email" placeholder='Email' className='cajas' />
                <input type="password" placeholder='Password' className='cajas' />
            </div>
            <div className='login-button'>
              <button>SIGN UP</button>
            </div>
        </div>
    );
}
