import './Card.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtoBasket, removeFromBasket } from '../../store/basketSlice';

function Card ({ id, img, title, category, price}) {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.basket);


    const onByClick = (event) => {
         event.preventDefault();
         event.stopPropagation();

         dispatch(addtoBasket(id));
     }

     const onDeleteClick = (event) => {
         event.preventDefault();
         event.stopPropagation();

         dispatch(removeFromBasket(id));
     }

    return (
         <div className='Card'>
            <Link to={`products/${id}`}><img className='Card-img' src={ img } alt="products" /></Link>
             <div className='Card-container'>
                <Link to={`products/${id}`}><h2 className='Card-title'> { title } </h2></Link>
                 <div className='Card-info'>
                     <div className='Card-category'> { category } </div>
                     <div className='Card-price common-price'>{ price }</div>
                 </div>
                 <div className='Card-cost'>
                     { !products[id] && <button onClick={ onByClick } className='Card-button'>Купить</button>}
                     {  products[id] && (
                        <div className='Button-Counter'>
                             <button className='Button-Minus' onClick={ onDeleteClick }>-</button>
                                 { products[id] }
                             <button className='Button-Plus' onClick={ onByClick }>+</button>
                             <Link to={'/basket'}><button className='Button-Basket'>В корзину</button></Link>
                        </div>
                     )}
                </div>
             </div>
         </div>
    )
}

export default Card;