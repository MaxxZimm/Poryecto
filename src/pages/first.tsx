import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { FormEvent, useState } from "react";
import Link from 'next/link';

const First = () => {
    
    return (

        <div className="input11">
            <input className="input__box" type="input" placeholder="Test" /*onChange={(e) => setUsername(e.target.value)}*/ />
        </div>

    );
}

export default First;
