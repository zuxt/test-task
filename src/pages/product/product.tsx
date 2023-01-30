import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './product.css';

import { getSingleProduct } from '../../services/dummyRest';
import { Tproducts } from '../../models/types';

import ImageCarousel from '../../components/imageCarousel/imageCarousel';

const Product: React.FC = (props) => {
  const { id } = useParams();

  const [product, setProduct] = useState<Tproducts>({
    id: 0,
    title: 'INIT',
    description: 'Initial state',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: 'none',
    category: 'none',
    thumbnail: '',
    images: ['ddd'],
  });

  useEffect(() => {
    getSingleProduct(Number(id)).then((ret) => {
      setProduct((prev) => {
        return { ...prev, ...ret };
      });
    });
  }, [id]);

  return (
    <>
      <div className='product-main'>
        <div className='product-parent'>
          <div className='product-imageparent'>
            <ImageCarousel imageList={product.images} />
          </div>

          <div className='product-descparent'>
            <div className='product-title'>{product.title}</div>
            <div className='product-desc'>{product.description}</div>
            <div className='product-price'>{`${product.price}€`}</div>
            <div className='product-availability'>{`ONLY ${product.stock} LEFT!`}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
