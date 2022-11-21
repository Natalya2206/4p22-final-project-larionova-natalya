import './App.css';
import Card from './components/card/Card';
import { useEffect, useState} from 'react';
import Header from './components/header/header';
import Footer from './components/Footer/Footer';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://6378cea27eb4705cf274e216.mockapi.io/games')
     .then((responce) => responce.json())
     .then((result) =>{
      setProducts(result);
     })
  }, []);
     
  return (
    <div className="App">
      <Header/>
      <div className='App-container'>
        {
          products.map((item) => {
            return <Card id={item.id}
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
