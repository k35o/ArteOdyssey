import { Button, PlusIcon } from '@k8o/arte-odyssey';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 font-bold text-2xl">カウント: {count}</h1>
      <Button
        onClick={() => setCount((c) => c + 1)}
        size="md"
        startIcon={<PlusIcon />}
        variant="contained"
      >
        カウントを増加
      </Button>
    </div>
  );
}

export default App;
