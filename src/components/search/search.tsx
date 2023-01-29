import './search.css';
import { useState } from 'react';

const Search: React.FC<{ callbackFn: (text: string) => void }> = (props) => {
  const [text, setText] = useState<string>('');

  return (
    <div className='search-parent'>
      <button
        className='search-btn'
        onClick={() => {
          props.callbackFn(text);
        }}
      >
        search
      </button>
      <input
        type='search'
        className='search-input'
        onChange={(event) => {
          setText(event.currentTarget.value);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            props.callbackFn(event.currentTarget.value);
          }
        }}
      />
    </div>
  );
};

export default Search;
