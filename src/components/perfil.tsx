
import react from 'react'
import Link from 'next/link';


const Perfil = () => {
    return (
       <form className="cuadro"> 
       <Link href="first"> <button className="atrasPerfil" type="submit"></button> </Link>
            <div className = "superior"> 
                <div className = "superior-izquierda">
                    <label className= "info"> Info del estudiante </label>
                </div>
                <div  className = "superior-derecha">
                    <label className= "aptitudes"> Aptitudes </label>
                </div>
            </div>
            <div className = "inferior">
                <div className = "inferior-izquierda">
                    <button className="NOLike" type="submit"></button>
                </div>
                <div className = "inferior-derecha">
                    <button className="SILike" type="submit"></button>
                </div>
            </div>
        </form>   
    );
};
export default Perfil