import './Entry.scss'

function Entry ()  {
    return (
        <div className='entry'>
             <form className="form">
                 <div className="form__header">
                     <h2>Вход</h2>
                 </div>
                 <div className="form__input">
                     <div className="form-input__info">
                         <label className="form-input__info-email" htmlFor="email">Email</label>
                         <input className="input" id="email" name="email" type="email" placeholder="Введите email"/>
                     </div>
                 <div className="form-input__info">
                     <label className="form-input__info-password" htmlFor="password">Пароль</label>
                     <input className="input" id="password" name="password" type="password" placeholder="Введите пароль"/>
                 </div>
                 <div class="form__input-checkbox">
                     <input id="checkbox" type="checkbox"/>
                     <label class="form-input-checkbox__label" htmlFor="checkbox">Запомнить меня</label> 
                 </div>
                 <button className="form__button">Войти</button>
                 </div>
             </form>
         </div>

    )
}

export default Entry;