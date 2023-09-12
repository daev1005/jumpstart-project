import { useEffect } from 'react';
import { Button } from '../../../shared/src/components/button'; // '@shared/src/components/button';

import apiClient from './api/apiClient'; // '@api/apiClient';

export const App: React.FC = () => {
  useEffect(() => {
    apiClient.getHello().then((res) => console.log(res));
  }, []);

  return (
    <>
      <div>Hello World!</div>
      <Button>I am a button</Button>
    </>
  );
};

export default App;
