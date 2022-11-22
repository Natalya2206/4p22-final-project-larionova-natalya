import './header.css';

function Header () {
    return(
        <div className='header'>
             <div className='header__logo'>
                 <img src="https://img.icons8.com/ios-filled/50/null/controller.png" alt="logo" />
             </div>
             <div className="header__title">
                 <h1>Game-shop</h1>
             </div>
             <div className="header__links">
                 <a href=".#" className="header__links-entry">Вход</a>
                 <a href=".#" className="header__links-registration">Регистрация</a>
                 <a href=".#" className="header__links-basket">Корзина</a>
             </div>
        </div>
    )
}

export default Header;