import './IndexPages.scss';
import { useEffect, useState} from 'react';
import Card from '../../components/card/Card';
import Research from '../../components/research/research';
import Select from 'react-select';


function IndexPage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setactiveCategory] = useState({});
    const [titles, setTitles] = useState('');
  
    const handleSearchInput = (name) => {
      setTitles(name)
      if (name.length >= 1) {
        setProducts(products.filter(product => {
          return product.title.toLowerCase().indexOf(name) >= 0
        }))
      } else {
        getAllProducts()
      }
    }

    function getAllProducts(){
      fetch('https://6378cea27eb4705cf274e216.mockapi.io/games')
       .then((responce) => responce.json())
       .then((result) =>{
        setProducts(result);
        let uniqCategory = new Set();
        let сategories = []
        result.forEach(product => {
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
       });
    }
  
    useEffect(() => {
      getAllProducts()
    }, []);
       
    return (
      <div className="Index">
        <div className='filter'>
         <Research 
         searchField={handleSearchInput}/>
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