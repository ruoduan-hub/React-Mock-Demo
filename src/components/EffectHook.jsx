/* eslint-disable */
import React from 'react';
import { useState, useEffect } from 'react'

export default function EffectHook () {
    const [count, setCount] = useState({
        name: null,
        id: 0,
        title: null
    });

    // 与 componentDidMount 和 componentDidUpdate 类似:
    useEffect(()=>{
        document.title = `当前的count是 ${count.id}`
    })

    return (
        <>
        <p>count： {count.title}</p>
        <button onClick={()=> setCount( {title: '张三'} )}>更新title</button>
        <button onClick={()=> setCount( {id: count.id + 1 } )}>title +1</button>
        </>
    )

}
