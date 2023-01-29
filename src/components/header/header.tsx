import './header.css';

import Search from '../search/search';

const header: React.FC<{
  title: string;
  subtitle: string;
  callbackFn: (item: string) => void;
}> = (props) => {
  return (
    <div className='header-parent'>
      <Search callbackFn={props.callbackFn} />
      <div className='header-title'>{props.title}</div>
      <div className='header-subTitle'>{props.subtitle}</div>
    </div>
  );
};

export default header;
