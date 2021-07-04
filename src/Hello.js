import React from "react";

export const Hello = React.memo(({increment}) => {
    return (
        <>
        <div>
        <button onClick={increment}>Hello</button>
        </div>
        </>
    )
})