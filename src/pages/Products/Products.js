import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Products.scss';

function ProductPage () {
    const { userId } = useParams();
    const [products, setProducts] = useState({});

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
                     <button className='Products-button'>Купить</button>
                </div>
             </div>
        </div>
    )
}

export default ProductPage;