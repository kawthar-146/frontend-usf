import React, { useContext, useState } from "react";
import SessionContext from '../../context/SessionContext';
import "./Login.Popup.css"

export default function LoginPopup(props) {
    const value = props.value;
    const {
        actions: { loginDoctor , loginStudent },
    } = useContext(SessionContext);
      
    const [state, setValue] = useState({
        email: "",
        password: "",
    });

    const { email, password } = state;
  
    function setState(nextState) {
        setValue((prevState) => ({
            ...prevState,
            ...nextState,
        }));
    }

    function handleChange(e) {
        let { name, value } = e.target;
        setState({ [name]: value });
    }

    async function handleSubmit(e) {
        e.nativeEvent.preventDefault();
        if(value === 'doctor'){
            loginDoctor(email, password);
        } else if (value === 'student'){
            loginStudent(email,password);
        }
    }

    return (
        <div className="popup_login">
            <div className="popup_content">
                <h2> Welcome! </h2>
                <form className="popup_input" onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={handleChange}
                            required
                        />
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={handleChange}
                            required
                        />
                        <span>Forget Password?</span>
                    <button className="popup_signin" type="submit">
                        Sign In
                    </button>
                </form>
                <span onClick={()=>props.setTrigger(false)} className="close_popup">
                    x
                </span>
            </div>
        </div>
    );
}
