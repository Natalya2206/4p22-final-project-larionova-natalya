import { useDispatch, useSelector } from 'react-redux';
import { clearBasket } from '../../store/basketSlice';
import Card from '../../components/card/Card';
import './basket.scss';

function Basket () {
    const products = useSelector(state => state.products.entities);
    const basket = useSelector(state => state.basket);
    const dispatch = useDispatch();
    return (
        <>
            <div className='Basket-sum common-price'>
                <p>Общая сумма:</p> 
            { products.reduce((acc, product) =>{
                   if (basket[product.id]) {
                       acc += product.price * basket[product.id];
                   }
                   return acc;
            }, 0) }
            </div>
            <div className='Basket-amount'>
                <p>Количество товаров:</p>
                { Object.values(basket).reduce((acc, item) => {
                  acc += item;

                  return acc;
                }, 0) }
            </div>
            <button className='Basket-clear' onClick={() => dispatch(clearBasket())}>Очистить корзину</button> 
            <div className='Basket-products-container'>
            { products.filter((product) => basket[product.id])
            .map((item, index) => {
                return <Card
                        key={index}
                        id={item.id}
                        title={item.title} 
                        img={item.image}
                        category={item.category} 
                        price={item.price} />
            })

            }
            </div>
        </>
    )
}

export default Basket;