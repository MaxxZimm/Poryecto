import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { FormEvent, useState } from "react";
import Link from 'next/link';


const First = () => {
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
    <div className="cuadroRegister">
        <div className="superiorRegister">

        </div>      
        <div className="inferiorRegister">
        <div className="mail">
            <input className="input_mail" type="input" placeholder="Mail"/>
        </div>
        <div className="contraseña">
            <input className="input_contraseña" type="input" placeholder="Contraseña"/>
        </div>
        <div className="nombre">
            <input className="input_nombre" type="input" placeholder="Nombre Completo"/>
        </div>
        <div className="edad">
            <input className="input_edad" type="input" placeholder="Edad"/>
        </div>
        <div className="pais">
            <input className="input_pais" type="input" placeholder="Pais"/>
        </div>
        <div className="genero">
            <input className="input_genero" type="input" placeholder="Genero"/>                 
            <button className="terminarRegister" type="submit"></button>   
        </div>       
        </div>

    </div>
    );
}

export default First