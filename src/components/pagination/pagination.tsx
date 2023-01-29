import './pagination.css';

const Pagination: React.FC<{
  max: number;
  current: number;
  callbackFn: (pageno: number) => void;
}> = (props) => {
  return (
    <div className='pagination-parent'>
      <div className='pagination-btn' onClick={() => props.callbackFn(0)}>
        {'<<<'}
      </div>
      <div
        className='pagination-btn'
        onClick={() =>
          props.callbackFn(
            props.current > 0 ? props.current - 1 : props.current
          )
        }
      >
        {'<'}
      </div>
      <input
        className='pagination-input'
        type='number'
        onChange={(event) => {
          props.callbackFn(Number(event.currentTarget.value));
        }}
        value={props.current}
      />
      <div
        className='pagination-btn'
        onClick={() =>
          props.callbackFn(
            props.current < props.max ? props.current + 1 : props.current
          )
        }
      >
        {'>'}
      </div>
      <div
        className='pagination-btn'
        onClick={() => props.callbackFn(props.max)}
      >
        {'>>>'}
      </div>
    </div>
  );
};

export default Pagination;
