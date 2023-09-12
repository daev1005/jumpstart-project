import { useEffect } from 'react';

import apiClient from '../api/apiClient';

export const App: React.FC = () => {
  useEffect(() => {
    apiClient.getHello().then((res) => console.log(res));
  }, []);

  return <div>Hello World!</div>;
};

export default App;
