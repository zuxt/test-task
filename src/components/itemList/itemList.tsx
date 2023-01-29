import { useState, useId } from 'react';
import './itemList.css';

import { Tproducts } from '../../models/types';

import Card from '../card/card';
import Pagination from '../pagination/pagination';

const Itemlist: React.FC<{
  items: Tproducts[];
  callbackFn: (id: number) => void;
}> = (props) => {
  const maxItemsOnPage: number = 10;
  const [page, setpage] = useState<number>(0);
  const handlePages = (pageNo: number) => {
    setpage(pageNo);
  };

  return (
    <div>
      <div className='itemList-parent'>
        {props.items.length > 0 ? (
          props.items
            .slice(
              page * maxItemsOnPage,
              page * maxItemsOnPage + maxItemsOnPage
            )
            .map((item, i: number) => {
              return <Card key={i} item={item} callbackFn={props.callbackFn} />;
            })
        ) : (
          <h3 className='itemList-worning'>
            No products found. try searching something else!
          </h3>
        )}
      </div>
      <div className='itemList-paginationParent'>
        <Pagination
          key={useId()}
          callbackFn={handlePages}
          current={page}
          max={Math.round(props.items.length / maxItemsOnPage - 1)}
        />
      </div>
    </div>
  );
};

export default Itemlist;
