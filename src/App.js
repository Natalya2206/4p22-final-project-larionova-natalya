import './App.css';
import Card from './components/card/Card';
import { useEffect, useState} from 'react';
import Header from './components/header/header';
import Research from './components/research/research';
import Select from 'react-select';
import Footer from './components/Footer/Footer';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setactiveCategory] = useState({});

  useEffect(() => {
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
  }, []);
     
  return (
    <div className="App">
      <Header/>
      <div className='filter'>
       <Research/>
       <Select options={categories}
         className="react-select-container"
         classNamePrefix="react-select"
         onChange={(options) => {
         setactiveCategory(options)
      }} />
      </div> 
      <div className='App-container'>
        {
          products.filter((products) => {
            if (activeCategory.label === undefined) {
              return true
            } else {
              return products.category === activeCategory.label
            }
          }).map((item) => {
            return <Card key={item.id}
                         title={item.title} 
                         img={item.image}
                         category={item.category} 
                         price={item.price} />
          })
        }
      </div>
      <Footer/>
    </div>
  );
}

export default App;
