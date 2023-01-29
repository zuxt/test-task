import { useEffect, useState } from 'react';
import './imageCarousel.css';

const ImageCarousel: React.FC<{ imageList: string[] }> = (props) => {
  const [image, setImage] = useState<string>(props.imageList[0]);
  const [index, setIndex] = useState<number>(0);

  const clickHandler = (state: string) => {
    if (state === 'prev') {
      if (props.imageList.indexOf(image) > 0)
        setImage(props.imageList[props.imageList.indexOf(image) - 1]);
    } else {
      if (props.imageList.indexOf(image) < props.imageList.length - 1)
        setImage(props.imageList[props.imageList.indexOf(image) + 1]);
    }
  };

  useEffect(() => {
    setIndex(index + 1);
  }, [image]);

  return (
    <div className='imageCarousel-parent'>
      <div className='imageCarousel-prev' onClick={() => clickHandler('prev')}>
        {'<'}
      </div>
      <img className='imageCarousel-img' key={index} src={image} alt={image} />
      <div className='imageCarousel-next' onClick={() => clickHandler('next')}>
        {'>'}
      </div>
    </div>
  );
};

export default ImageCarousel;
