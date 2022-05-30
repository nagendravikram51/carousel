import React, { useEffect, useState } from 'react'

// What is the scrope of the question

export default function Carousel({items = []}) {

    const [active, setActive] = useState(0)

    const timer = window.setInterval(()=>{

            if(active < items.length - 1 ){
                setActive(active + 1);
            }else{
                setActive(0)
            }
        }, 1000)

    useEffect(()=>{
        return ()=> clearInterval(timer);
    }, [])

  return (
    <div className="container">
        <img src={items[active].url} />
        {/* <div className="next"> > </div>
        <div className="prev"> < </div> */}
    </div>
  )
}
