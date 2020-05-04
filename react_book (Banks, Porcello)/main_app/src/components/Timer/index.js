import React, { useState } from 'react';


const Timer = () => {
    let [count, setCount] = useState(10);

    function tick(count) {
        setCount(--count);
    }

    function reset() {
        setCount(10);
    }

    if (count) {
        setTimeout(() => tick(count), 1000);
    }

    return <>
        {
            (count) ?
                <div className="timer__count">{count}</div> :
                <div className="timer__reset reset" onClick={reset}>
                    <p className="reset__text--finish">Finish</p>
                    <p className="reset__text--advice">Push for restart Timer</p>
                </div>
        }    
    </>
};

export default Timer;