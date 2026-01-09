import React from "react"
import { useState } from "react"
import { CheckBox } from "./CheckBox";

export const Password = () => {
    const [password, setPassword] = useState("");


    const lengthCheck = () => {

        return password.length >= 8;
    }

    const numberCheck = () => {

        return /[0-9]/.test(password)
    }
    
    const specialCharCheck = () => {

        return /[!@#$%^&*]/.test(password)
    }

    const capCheck = () => {

        return /[A-Z]/.test(password)
    }

    

    return (
        <div>
            <div className="flex justify-center">
            <div className="px-2">Password : </div>
            <div className="px-2">
                <input value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            </div>
               
            <div>

                <div>
                    <CheckBox content="length should be atleast 8 chars" status={lengthCheck()}/>
                </div>
                <div>
                    <CheckBox content="has got a number" status={numberCheck()}/>
                </div>
                <div>
                    <CheckBox content="has got a special character" status={specialCharCheck()}/>
                </div>
                <div>
                    <CheckBox content="has got a capital letter" status={capCheck()}/>
                </div>
            </div>
        </div>
    )
}