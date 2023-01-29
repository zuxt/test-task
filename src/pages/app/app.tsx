import './app.css';

import { useContext, useEffect, useState, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Header from '../../components/header/header';
import Advertisements from '../../components/advertisements/advertisements';
import Main from '../main/main';
import Product from '../product/product';

import { DataContext } from '../../context/productsContext';

import { getAllproducts } from '../../services/dummyRest';

const App: React.FC = () => {
  const { data, setData } = useContext(DataContext);
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();
  let i = useRef(0);

  useEffect(() => {
    getAllproducts().then((res) => {
      setData(res);
    });
  }, []);

  const handleItemClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  const handleSearch = (item: string) => {
    setQuery(item.trim());
    i.current = i.current + 1;
  };

  return (
    <>
      <div className='app'>
        <Header
          title='eKoridor'
          subtitle='svega za raju i šire'
          callbackFn={handleSearch}
        />
        <Advertisements items={data.products} callbackFn={handleItemClick} />
        <div className='app-main'>
          <Routes>
            <Route
              path='/'
              element={
                <Main
                  key={i.current}
                  callbackFn={handleItemClick}
                  showQuery={query}
                />
              }
            />

            <Route path='/product/:id' element={<Product />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
