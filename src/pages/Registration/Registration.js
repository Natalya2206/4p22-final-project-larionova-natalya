import './Registration.scss';

function Registration ()  {
    return (
         <form className="Registration">
             <div className="Registration__header">
                 <h5>Регистрация</h5>
             </div>
             <div className="Registration__input">
                 <div className="Registration__input-info">
                     <label className="Registration__input-info-email" htmlFor="email">Email</label>
                     <input className="Registration__input-input" id="email" name="email" type="email" placeholder="Введите email" />
                 </div>
                 <div className="Registration__input-info">
                     <label className="Registration__input-info-password" htmlFor="password">Пароль</label>
                     <input className="Registration__input-input" id="password" name="password" type="password" placeholder="Введите пароль"/>
                 </div>
                 <div className="Registration__input-info">
                     <label className="Registration__input-info-confirm_password" htmlFor="confirm_password">Подтверждение пароля</label>
                     <input className="Registration__input-input" id="confirm_password" name="confirm_password" type="password" placeholder="Подтвердите пароль"/>
                 </div>
                 <div className="Registration__input-radio"> 
                     <div className="Registration__input-radio-email">Вы согласны получать уведомления на почту?</div>
                     <div className="Registration__input-radio-yes">
                         <input id="radio_yes" type="radio" name="choise" value="yes"/>
                         <label className="Registration__input-radio-label" htmlFor="radio_yes">Да</label>
                     </div>
                     <div className="Registration__input-radio-no">
                         <input id="radio_no" type="radio" name="choise" value="no"/>
                         <label className="Registration__input-radio-label" htmlFor="radio_no">Нет</label>
                     </div>
             </div>
             <button className="Registration__button">Регистрация</button>
             </div>
         </form>
    )
}

export default Registration;