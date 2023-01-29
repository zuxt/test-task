import './main.css';
import { useContext, useEffect, useState } from 'react';
import Navigation from '../../components/navigation/navigation';
import Itemlist from '../../components/itemList/itemList';

import { DataContext } from '../../context/productsContext';

import {
  getProductsByCategorie,
  searchProducts,
} from '../../services/dummyRest';

const Main: React.FC<{
  callbackFn: (id: number) => void;
  showQuery: string;
}> = (props) => {
  const { data } = useContext(DataContext);
  const [selected, setSelected] = useState<string>('');
  const [filtered, setFiltered] = useState(data.products);

  useEffect(() => {
    if (props.showQuery !== ' ') {
      searchProducts(props.showQuery).then((ret) => {
        setFiltered(ret.products);
        setSelected('');
      });
    } else {
      setFiltered(data.products);
    }
  }, []);

  const navigationCallback = (itemName: string) => {
    getProductsByCategorie(itemName).then((ret) => {
      setFiltered(ret.products);
      setSelected(itemName);
    });
  };

  return (
    <>
      <Navigation callBackFn={navigationCallback} current={selected} />
      <Itemlist items={filtered} callbackFn={props.callbackFn} />
    </>
  );
};

export default Main;
