import { useRef, useEffect } from "react";
function usePrevious(value) {
  const ref = useRef();
  // This will run second
  useEffect(() => {
    ref.current = value;
  }, [value]);
  //This is run first
  return ref.current;
}
export default usePrevious;
