import './simpleCard.css';
import { Tproducts } from '../../models/types';

const SimpleCard: React.FC<{
  item: Tproducts;
  callbackFn: (id: number) => void;
}> = (props) => {
  return (
    <div
      className='simpleCard-card '
      onClick={() => {
        props.callbackFn(props.item.id);
      }}
    >
      <div className='simpleCard-card-impParent'>
        <img
          className='simpleCard-card-img'
          src={props.item.thumbnail}
          alt={props.item.title}
        />
      </div>

      <div className='simpleCard-descparent'>
        <p className='simpleCard-card-title'>{props.item.title}</p>
        <p className='simpleCard-card-price'>{`For Limited Time Only ${props.item.price}€`}</p>
        <div className='simpleCard-card-discount'>{`-${props.item.discountPercentage}%`}</div>
      </div>
    </div>
  );
};

export default SimpleCard;
