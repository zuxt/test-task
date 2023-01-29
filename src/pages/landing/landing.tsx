import './landing.css';
import { useContext, useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Advertisements from '../../components/advertisements/advertisements';
import Navigation from '../../components/navigation/navigation';
import Itemlist from '../../components/itemList/itemList';
import Product from '../product/product';

import { DataContext } from '../../context/productsContext';

import {
  getAllproducts,
  getProductsByCategorie,
  searchProducts,
} from '../../services/dummyRest';

const Landing: React.FC = () => {
  const { data, setData } = useContext(DataContext);
  const [selected, setSelected] = useState<string>('');
  const [filtered, setFiltered] = useState(data.products);

  useEffect(() => {
    getAllproducts().then((res) => {
      setData(res);
      setFiltered(res.products);
    });
  }, []);

  const navigationCallback = (itemName: string) => {
    getProductsByCategorie(itemName).then((ret) => {
      setFiltered(ret.products);
      setSelected(itemName);
    });
  };

  const handleItemClick = (id: number) => {
    console.log('>id>', id);
  };

  const handleSearch = (item: string) => {
    if (item !== '') {
      searchProducts(item).then((ret) => {
        setFiltered(ret.products);
        setSelected('');
      });
    } else {
      getAllproducts().then((res) => {
        setFiltered(res.products);
        setSelected('');
      });
    }
  };

  return (
    <>
      <div className='landing-parent'>
        <Header
          title='Best WebShop EVER'
          subtitle='prepare to be amazed'
          callbackFn={handleSearch}
        />

        <div className='landing-main'>
          <Advertisements items={data.products} callbackFn={handleItemClick} />
          <Navigation callBackFn={navigationCallback} current={selected} />
          <Itemlist items={filtered} callbackFn={handleItemClick} />
        </div>

        {/* <Product id={1} /> */}
      </div>
    </>
  );
};

export default Landing;
