import { useEffect, useState } from 'react';
import './navigation.css';
import { getCategories } from '../../services/dummyRest';

const Navigation: React.FC<{
  callBackFn: (itemName: string) => void;
  current: string;
}> = (props) => {
  const [list, setlist] = useState<string[]>([]);
  useEffect(() => {
    getCategories().then((resp) => {
      setlist(resp);
    });
  }, []);

  return (
    <div className='navigation-parent'>
      <ul className='navigation-ul'>
        {list.map((item: string, i: number) => {
          return (
            <li
              key={i}
              className={`navigation-li ${
                item === props.current ? 'navigation-selected' : null
              }`}
              onClick={(event) => {
                props.callBackFn(event.currentTarget.textContent!);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
