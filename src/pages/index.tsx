import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { FormEvent, useState } from "react";
import Link from 'next/link';
//import InputField from '@/components/InputFeild';
//import React, 

const App: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");  

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
    }

    return (
        
        <div className="App">
            <Link href="register"> <button className="irRegister" type="submit"> Registrarse  </button> </Link>
            <div className="justify-center items-center pt-36 flex flex-col">  
            
                <span className="font-bold font-poppins  text-2x1">Connect</span>              
                <form action="?action=save" name="myform" method="post" onSubmit={handleSubmit}>
                    
                    <a href=""></a>
                    <div className="input1">
                        <input className="input__box" type="input" placeholder="Mail" onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <div className="input2">
                        <input type="input" placeholder="Contraseña" className="input__box" onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div>
                        <Link href="first"> <button className="input__submit" type="submit"> Continuar  </button> </Link>
                    </div>
                    
                    <div> <img className= "logo" src="isologo.png" alt="" /></div>
                </form>                
            </div>
        </div>
    );
}

export default App;