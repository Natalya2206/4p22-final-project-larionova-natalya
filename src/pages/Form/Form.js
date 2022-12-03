import './Form.scss'
import { useState, useEffect } from 'react';

function Form ()  {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [emailDirty, setEmailDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [emailError, setEmailError] = useState("Поле не заполнено");
    const [nameError, setNameError] = useState("Поле не заполнено");
    const [phoneError, setPhoneError] = useState("Поле не заполнено");
    const [formValid, setFormValid] = useState(false);

    useEffect (() => {
        if (emailError || nameError || phoneError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, nameError, phoneError])

    const emailHandler = (e) => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regex(e.target.value)) {
            setEmailError("Неккоректный email")
        } else {
            setEmailError("")
        }
    }

    const nameHandler = (e) => {
        if(e.target.value.length < 1 || e.target.value.length > 15) {
            setNameError("Неккоректное имя")
            if(!e.target.value) {
                setNameError("Неккоректное имя")
            }
        } else {
            setNameError("")
        }
    }

    const phoneHandler = (e) => {
        const regexPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if(!regexPhone(e.target.value)) {
            setPhoneError("Неккоректный номер")
        } else {
            setPhoneError("")
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'name':
                setNameDirty(true)
                 break;
            case 'phone':
                setPhoneDirty(true)
                break;
            default:
                break;            
        }
    }

    return (
        <div className='entry'>
             <form className="form">
                 <div className="form__header">
                     <h2>Обратная связь</h2>
                 </div>
                 <div className="form__input">
                     <div className="form-input__info">
                         <label className="form-input__info-email" htmlFor="email">Email*</label>
                         {(emailDirty && emailError) && <div className='erorr-email'>{emailError}</div>}
                         <input className="input" id="email" name="email" type="email" placeholder="Введите email"
                                 value={email}  onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} />
                     </div>
                     <div className="form-input__info">
                         <label className="form-input__info-name" htmlFor="name">Имя*</label>
                         {(nameDirty && nameError) && <div className='erorr-email'>{nameError}</div>}
                         <input className="input" id="name" name="name" type="text" placeholder="Введите имя" 
                                 value={name} onChange={e => nameHandler(e)} onBlur={e => blurHandler(e)}/>
                     </div>
                     <div className="form-input__info">
                         <label className="form-input__info-password" htmlFor="password">Телефон*</label>
                         {(phoneDirty && phoneError) && <div className='erorr-email'>{phoneError}</div>}
                         <input className="input" id="phone" name="phone" type="text" placeholder="Введите номер телефона"
                                 value={phone} onChange={e => phoneHandler(e)} onBlur={e => blurHandler(e)}/>
                 </div>
                 <div className="form__input-checkbox">
                     <input id="checkbox" type="checkbox"/>
                     <label className="form-input-checkbox__label" htmlFor="checkbox">Подписаться на новости</label> 
                 </div>
                 <button disabled={!formValid} type='submit' className="form__button">Войти</button>
                 </div>
             </form>
         </div>

    )
}

export default Form;