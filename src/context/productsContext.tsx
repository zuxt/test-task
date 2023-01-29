import { createContext, useState } from 'react';

import { Tresponse } from '../models/types';

type TDataContextProps = {
  children: React.ReactNode;
};

export type TdataContextType = {
  data: Tresponse;
  setData: (newData: Tresponse) => void;
};


const initialState: Tresponse = {
  products: [
    {
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
      images: [''],
    },
  ],
  total: 0,
  skip: 0,
  limit: 0,
};

export const DataContext = createContext<TdataContextType>(null as unknown as TdataContextType);

function DataProvider({ children }: TDataContextProps): JSX.Element {
  const [data, _setData] = useState<Tresponse>(initialState);

  const setData = (newData: Tresponse): void => {
    _setData((prev) => ({ ...prev, ...newData }));
  };
  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
}

export default DataProvider;
