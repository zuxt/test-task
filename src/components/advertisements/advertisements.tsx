import React from 'react';
import './advertisements.css';
import { Tproducts } from '../../models/types';
import { getMultipleRandom } from '../../utils/utils';

import SimpleCard from '../simpleCard/simpleCard';

const Advertisements: React.FC<{
  items: Tproducts[];
}> = (props) => {
  return (
    <div className='advertisement-parent'>
      <div className='a-title'>jeftino dam samo da prodam</div>

      <div className='advertisement-products'>
        {getMultipleRandom(props.items, 3).map((item: Tproducts, i: number) => {
          return <SimpleCard key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Advertisements;
