import './HomePage.scss';
import { useEffect, useState} from 'react';
import Card from '../../components/card/Card';
import Research from '../../components/research/research';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/productsSlice';


function IndexPage() {
    const products = useSelector((state) => state.products.entities);
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const [activeCategory, setactiveCategory] = useState({});
    
    useEffect(() => {
      dispatch(getProducts());
      let uniqCategory = new Set();
      let сategories = []
      products.forEach(product => {
        let currentCategory = product.category;
        if(!uniqCategory.has(currentCategory)) {
          uniqCategory.add(currentCategory);
          сategories.push({
            value: currentCategory, 
            label: currentCategory
          })
        }
      });
      setCategories(сategories)
  }, []);    
     
    return (
      <div className="Index">
        <div className='Filter'>
         <Research />
         <Select
           isClearable
           isSearchable
           options={categories}
           className="react-select-container"
           classNamePrefix="react-select"
           placeholder='Категория'
           onChange={(options) => {
           setactiveCategory(options)
        }} />
        </div> 
        <div className='Index-container'>
          {
            products.filter((products) => {
              if (activeCategory===null || activeCategory.label === undefined) {
                return true
              } else {
                return products.category === activeCategory.label
              }
          }).map((item, index) => {
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
      </div>
    );
}

export default IndexPage;  