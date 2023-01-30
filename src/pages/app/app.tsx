import './app.css';

import { useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../../components/header/header';
import Advertisements from '../../components/advertisements/advertisements';
import Main from '../main/main';
import Product from '../product/product';

import { DataContext } from '../../context/productsContext';

import { getAllproducts } from '../../services/dummyRest';

const App: React.FC = () => {
  const { data, setData } = useContext(DataContext);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    getAllproducts().then((res) => {
      setData(res);
    });
  }, []);

  const handleSearch = (item: string) => {
    setQuery(item.trim());
  };

  return (
    <>
      <div className='app'>
        <Header
          title='eKoridor'
          subtitle='svega za raju i šire'
          callbackFn={handleSearch}
        />

        <div className='app-main'>
          <Advertisements items={data.products} />
          <Routes>
            <Route path='/' element={<Main showQuery={query} />} />

            <Route path='/product/:id' element={<Product />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
