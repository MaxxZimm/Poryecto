import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { FormEvent, useState } from "react";
import Link from 'next/link';


const App: React.FC = () => {
    const [mail, setMail] = useState(""); 
    const [contraseña, setContraseña] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");
    const [pais, setPais] = useState("");
    const [genero, setGenero] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(mail);
        console.log(contraseña);
        console.log(nombre);
        console.log(apellido); 
        console.log(edad);
        console.log(pais);
        console.log(genero);
    }

    return (
    <div className="cuadroRegister">
        <div className="superiorRegister">
            <Link href="/"> <button className="atrasRegister" type="submit"></button> </Link>  
        </div>      
        <div className="inferiorRegister">
            <form className = "formRegister" onSubmit={handleSubmit}>
                <div className="mail">
                    <input className="input_mail" type="input" placeholder="Mail" onChange={(e) => setMail(e.target.value)}/>
                </div>
                <div className="contraseña">
                    <input className="input_contraseña" type="input" placeholder="Contraseña" onChange={(e) => setContraseña(e.target.value)}/>
                </div>
                <div className="nombre">
                    <input className="input_nombre" type="input" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div className="apellido">
                    <input className="input_apellido" type="input" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)}/>
                </div>
                <div className="edad">
                    <input className="input_edad" type="input" placeholder="Edad" onChange={(e) => setEdad(e.target.value)}/>
                </div>
                <div className="pais">
                    <input className="input_pais" type="input" placeholder="Pais" onChange={(e) => setPais(e.target.value)}/>
                </div>
                <div className="genero">
                    <input className="input_genero" type="input" placeholder="Genero" onChange={(e) => setGenero(e.target.value)}/>    
                    <Link href="/"> <button className="terminarRegister" type="submit"></button> </Link>            
                </div>           
            </form>
        </div>

    </div>
    );
}

export default App