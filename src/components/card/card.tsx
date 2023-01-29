import './card.css';
import { Tproducts } from '../../models/types';

const Card: React.FC<{
  item: Tproducts;
  callbackFn: (id: number) => void;
}> = (props) => {
  return (
    <div
      className='card-card '
      onClick={() => {
        props.callbackFn(props.item.id);
      }}
    >
      <div className='card-card-impParent'>
        <img
          className='card-card-img'
          src={props.item.thumbnail}
          alt={props.item.title}
        />
      </div>

      <div className='card-descparent'>
        <p className='card-card-title'>{props.item.title}</p>
        <p className='card-card-price'>{`${props.item.price}€`}</p>
        <p className='card-card-rating'>{`User rating: ${props.item.rating}/5`}</p>
        <p className='card-card-stock'>{`ONLY ${props.item.stock} LEFT`}</p>
      </div>
    </div>
  );
};

export default Card;
