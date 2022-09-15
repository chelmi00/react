import React, {useState, useEffect} from "react";

const ExampleComponent = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        let inter = setInterval(() => console.log('interval'), 1000);
        return () => clearInterval(inter);
        document.getElementById("btn-id").innerText = `You clicked ${count} times`;
    }, []);

    return (
        <>
        Count: {count}
        <button id="btn-id" onClick={() => setCount(count + 1)}>+</button>
        </>
    );
};

export default ExampleComponent;