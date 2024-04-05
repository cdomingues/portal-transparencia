// components/PageViewCounter.tsx

import axios from 'axios';
import { useEffect, useState } from 'react';

interface PageViewCounterProps {
  path: string;
}

const PageViewCounter: React.FC<PageViewCounterProps> = ({ path }) => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Atualiza o contador ao carregar a página
    axios.post('/api/updateCount/updateCount', { path }).then((response) => {
      setCount(response.data.count);
    });
  }, [path]);

  return (
    <div>
      
    </div>
  );
};

export default PageViewCounter;
