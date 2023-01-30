import { useNavigate } from 'react-router-dom';

export function useNav(): (id: number) => void {
  const navigate = useNavigate();

  return (id: number = 0) => {
    navigate(`/product/${id}`);
  };
}
