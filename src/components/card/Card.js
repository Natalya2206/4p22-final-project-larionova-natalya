import './Card.scss';
import { Link } from 'react-router-dom';

function Card ({ id, img, title, category, price}) {
    return (
         <div className='Card'>
            <Link to={`products/${id}`}><img className='Card-img' src={ img } alt="products" /></Link>
             <div className='Card-container'>
                <Link to={`products/${id}`}><h2 className='Card-title'> { title } </h2></Link>
                 <div className='Card-info'>
                     <div className='Card-category'> { category } </div>
                     <div className='Card-price common-price'>{ price }</div>
                 </div>
             </div>
         </div>
    )
}

export default Card;