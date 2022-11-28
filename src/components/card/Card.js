import './Card.scss';
import { Link } from 'react-router-dom';

function Card (props) {
    return (
         <div className='Card'>
            <Link to=''><img className='Card-img' src={ props.img } alt="products" /></Link>
             <div className='Card-container'>
                <a href=".#"><h2 className='Card-title'> { props.title } </h2></a>
                 <div className='Card-info'>
                     <div className='Card-category'> { props.category } </div>
                     <div className='Card-price common-price'>{ props.price }</div>
                 </div>
             </div>
         </div>
    )
}

export default Card;