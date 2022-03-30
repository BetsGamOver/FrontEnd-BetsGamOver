import './paginaInicio.css';
import futbol from "./img/futbol.jpeg"
function paginaInicio(){
    return(
        <><div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            </div>
                <img src={futbol} alt="futbol" className='imagen'/>
            <div>

        </div></>
    );
}