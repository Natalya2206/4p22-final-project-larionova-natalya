import './Entry.scss'
import { useState } from 'react';

function validation (itemName, value, callback) {
    let isValid;
    let erorrMessage;
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = !!value?.match(regex);

    switch (itemName) {
        case "email":
            isValid = isValidEmail;
            erorrMessage = "Неккоректный email";
            break;
        case "password":
            isValid = value.length > 8;
            erorrMessage = "Пароль меньше 8 символов";
            break;
        default:
            break;   
    }
    callback ((prevState) => {
        return {
            ...prevState,
            [itemName]: {
                isErorr: !isValid,
                erorrMessage,
            },
        };
    });
}

function Entry ()  {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erorrs, setErorr] = useState({
        email: {
            isErorr: false,
            erorrMessage: "",
        },
        password: {
            isErorr: false,
            erorrMessage: "",
        },
    });

    const { email: emailErorr, password: passwordErorr } = erorrs;

    const formChangeHandler = (e) => {
        const item = e.target.name;
        const value = e.target.value;
        validation(item, value, setErorr);
    }

    return (
        <div className='entry'>
             <form className="form" onChange={formChangeHandler}>
                 <div className="form__header">
                     <h2>Вход</h2>
                 </div>
                 <div className="form__input">
                     <div className="form-input__info">
                         <label className="form-input__info-email" htmlFor="email">Email</label>
                         {emailErorr.isErorr && <div className='erorr-email'>{emailErorr.erorrMessage}</div>}
                         <input className="input" id="email" name="email" type="email" placeholder="Введите email"
                                 value={email} onChange={(e) => setEmail(e.target.value)} />
                     </div>
                 <div className="form-input__info">
                     <label className="form-input__info-password" htmlFor="password">Пароль</label>
                     <div className='erorr-email'>
                     {passwordErorr.isErorr && <div>{passwordErorr.erorrMessage}</div>}
                     </div>
                     <input className="input" id="password" name="password" type="password" placeholder="Введите пароль"
                             value={password} onChange={(e) => setPassword(e.target.value)}/>
                 </div>
                 <div className="form__input-checkbox">
                     <input id="checkbox" type="checkbox"/>
                     <label className="form-input-checkbox__label" htmlFor="checkbox">Запомнить меня</label> 
                 </div>
                 <button className="form__button">Войти</button>
                 </div>
             </form>
         </div>

    )
}

export default Entry;