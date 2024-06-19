import { useState } from "react";
import usePrevious from "./usePrevious";

function App() {
  const [count, setCount] = useState(0);
  const previousValue = usePrevious(count);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      Current value: {count}
      Previous value:{previousValue}
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  );
}

export default App;
