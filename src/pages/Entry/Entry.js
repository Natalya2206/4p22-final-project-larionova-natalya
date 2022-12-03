import './Entry.scss'
import { useState } from 'react';

function validation (itemName, value, callback) {
    let isValid;
    let erorrMessage;
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = !!value?.match(regex);
    const regexPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    const isValidPhone = !!value?.match(regexPhone);
    const isEmptyField = value.length === 0;

    switch (itemName) {
        case "email":
            isValid = isValidEmail && !isEmptyField;
            erorrMessage = "Неккоректный email";
            break;
        case "name":
            isValid = value.length >= 2 && !isEmptyField;
            erorrMessage = "Неккоректное имя";
            break;
        case "phone":
            isValid = isValidPhone && !isEmptyField;
            erorrMessage = "Неккоректный номер";
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
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [erorrs, setErorr] = useState({
        email: {
            isErorr: false,
            erorrMessage: "",
        },
        name: {
            isErorr: false,
            erorrMessage: "",
        },
        phone: {
            isErorr: false,
            erorrMessage: "",
        },
    });

    const { email: emailErorr, name: nameErorr, phone:phoneErorr } = erorrs;

    const formChangeHandler = (e) => {
        const item = e.target.name;
        const value = e.target.value;
        validation(item, value, setErorr);
    }

    return (
        <div className='entry'>
             <form className="form" onChange={formChangeHandler}>
                 <div className="form__header">
                     <h2>Обратная связь</h2>
                 </div>
                 <div className="form__input">
                     <div className="form-input__info">
                         <label className="form-input__info-email" htmlFor="email">Email*</label>
                         {emailErorr.isErorr && <div className='erorr-email'>{emailErorr.erorrMessage}</div>}
                         <input className="input" id="email" name="email" type="email" placeholder="Введите email"
                                 value={email} onChange={(e) => setEmail(e.target.value)} />
                     </div>
                     <div className="form-input__info">
                         <label className="form-input__info-name" htmlFor="name">Имя*</label>
                         {nameErorr.isErorr && <div className='error-name'>{nameErorr.erorrMessage}</div>}
                         <input className="input" id="name" name="name" type="text" placeholder="Введите имя" 
                                 value={name} onChange={(e) => setName(e.target.value)}/>
                     </div>
                     <div className="form-input__info">
                         <label className="form-input__info-password" htmlFor="password">Телефон*</label>
                         {phoneErorr.isErorr && <div className='error-phone'>{phoneErorr.erorrMessage}</div>}
                         <input className="input" id="phone" name="phone" type="text" placeholder="Введите номер телефона"
                                value={phone} onChange={(e) => setPhone(e.target.value)}/>
                 </div>
                 <div className="form__input-checkbox">
                     <input id="checkbox" type="checkbox"/>
                     <label className="form-input-checkbox__label" htmlFor="checkbox">Подписаться на новости</label> 
                 </div>
                 <button className="form__button"
                         >Войти</button>
                 </div>
             </form>
         </div>

    )
}

export default Entry;