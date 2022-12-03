import './Header.scss';
import { Link } from 'react-router-dom';

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
                 <Link to={'/'} className="header__links-catalog">Каталог</Link>
                 <Link to={'basket'} className="header__links-basket">Корзина</Link>
                 <Link to={'form'} className="header__links-entry">Обратная связь</Link>
             </div>
        </div>
    )
}

export default Header;