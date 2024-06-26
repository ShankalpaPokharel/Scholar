import React,{useEffect,useState} from "react";

export default function CounterAnimation({initialValue,targetValue,text}) {
    const [count, setCount] = useState(initialValue);
    const duration = 2000; // 4 seconds
 
    useEffect(() => {
        let startValue = initialValue;
        const interval = Math.floor(
            duration / (targetValue - initialValue));
 
        const counter = setInterval(() => {
            startValue += 3;
            setCount(startValue);
            if (startValue >= targetValue) {
                clearInterval(counter);
            }
        }, interval);
 
        return () => {
            clearInterval(counter);
        };
    }, [targetValue, initialValue]);
  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold">{count} +</h2>
      <p className="test-sm mt-4 font-medium leading-7">{text}</p>
    </div>
  );
}
