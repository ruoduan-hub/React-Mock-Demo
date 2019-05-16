/* eslint-disable */
import React from 'react';
import { useState } from 'react';

export default function HookMock () {
   const [count, setCount] = useState(0)

    return (
        <>
            <br /><hr />
            <h1>Hook useState</h1>
            <h1>count:{ count }</h1>
            <button
            onClick = {()=> setCount( count + 1 )}
            >点击+1</button>
            <button
            onClick = {()=> setCount( count - 1 )}
            >点击-1</button>
            <button
            onClick = {()=> setCount(0)}
            >初始化</button>
        </>
    )
}
