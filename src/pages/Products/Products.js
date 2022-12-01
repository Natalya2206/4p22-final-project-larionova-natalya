import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addtoBasket, removeFromBasket } from '../../store/basketSlice';
import { Link } from 'react-router-dom';
import './Products.scss';

function ProductPage () {
    const { userId } = useParams();
    const [products, setProducts] = useState({});
    const dispatch = useDispatch();
    const goods = useSelector((state) => state.basket)


    const onByClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        dispatch(addtoBasket(products.id));
    }

    const onDeleteClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        dispatch(removeFromBasket(products.id));
    }

    useEffect(() => {
        (async () => {
        const response = await fetch(`https://6378cea27eb4705cf274e216.mockapi.io/games/${userId}`)
        const result = await response.json();

        setProducts(result);
        })();
    }, [])

    return(
        <div className='Products-container'>
            <div className='Products-box'>
                 <img className='Products-img' src={ products.image } alt="game" />
                 <h6>{ products.title } </h6>
                 <div className='Products-category'> { products.category } </div>
             </div>
             <div className='Products-info'>
                <div className='Products-description'> {products.description} </div>
                <div className='Products-cost'>
                     <div className='Products-price common-price'> {products.price} </div>
                     { !goods[products.id] && <button onClick={ onByClick } className='Products-button'>Купить</button>}
                     { goods[products.id] && (
                        <div className='Button-counter'>
                             <button className='Button-minus' onClick={ onDeleteClick }>-</button>
                                 <div className='Button-quantity'> { goods[products.id] } </div>
                             <button className='Button-plus' onClick={ onByClick }>+</button>
                             <Link to={'/basket'}><button className='Button-basket'>В корзину</button></Link>
                        </div>
                     )}
                </div>
             </div>
        </div>
    )
}

export default ProductPage;