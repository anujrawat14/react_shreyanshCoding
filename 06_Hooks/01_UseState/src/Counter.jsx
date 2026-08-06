import React, { useState } from "react";

const Counter = () => {
    const buttonStyle = {
        height: "200px",
        width: "150px",
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        margin: "50px",
    };

    const [count, setCount] = useState(1);

    // function incrementValue() {
    //     setCount(count + 1)
    // }
    // function decrementValue() {
    //     setCount(count - 1)
    // }

    return (
        <div className="parent">

            <h1
                className="flexbox1"
                style={buttonStyle}
            >
                {count}
            </h1>

            <div className="flexbox">

                {count < 30 && (
                    <button
                        // onClick={incrementValue}
                        disabled={count === 30}
                        onClick={() => setCount(prev => prev + 1)}
                        style={buttonStyle}
                    >
                        Increment
                    </button>
                )}

                <button
                    // onClick={decrementValue}
                    onClick={() => setCount(prev => prev - 1)}
                    style={{
                        ...buttonStyle,
                        display: count === 0 ? "none" : "block",
                    }} // css sa disable krna hai toh
                >
                    Decrement
                </button>

                <button
                    // onClick={decrementValue}
                    onClick={() => {
                        if (count <= 25) {
                            setCount(prev => prev + 5);
                        }
                    }}
                    style={buttonStyle}
                >
                    Jump by 5
                </button>

            </div>

        </div>
    );
};

export default Counter;