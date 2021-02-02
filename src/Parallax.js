import react, { useEffect, useState } from 'react'
import './style.css'
export default function Parallax(){
    const [position, setPosition] = useState(0);
    function onScroll(){
        //setPosition(window.scrollY)
        setPosition(window.pageYOffset);
    }
    useEffect(()=>{
        window.addEventListener("scroll", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll); //누수 피하기위해
        }
    },[]) //이렇게 빈 배열 넣으면 마운트되는 시점에 한번만 실행됨
    return (
        <>
        <div className="wrapper">
            <div className="bg bg1" style={{backgroundPositionY:position/2}}>
                <img src="images/img-7.jpg"/>
                <div>welcome</div>
            </div>
            <div className="bg bg2">
                <div>happy new year</div>
            </div>
            <p className="desc" style={{transform:`translateX(${-position}px)`}}>
                lorem upsum dolor st sadfsdfns jsfnjsfnsjnfjsnfjsnfjsn safsnafkjs kjsnfk jsnjksanfkjsnajsk
            </p>
            <p className="desc2" style={{transform:`translateX(${position}px)`}}>
                lorem upsum dolor st sadfsdfns jsfnjsfnsjnfjsnfjsnfjsn safsnafkjs kjsnfk jsnjksanfkjsnajsk
            </p>
            <p className="desc3" style={{opacity:(position-100)/50 }}>Duls ajisdf misdfn sdfnsjfnjasd</p>
            <p className="desc3" style={{opacity:(position-230)/50 }}>Duls ajisdf misdfn sdfnsjfnjasd</p>
            <p className="desc3" style={{opacity:(position-360)/50 }}>Duls ajisdf misdfn sdfnsjfnjasd</p>
            <p className="desc3" style={{opacity:(position-490)/50 }}>Duls ajisdf misdfn sdfnsjfnjasd</p>
            <p>sadffffffffffffffffffffffffffffff</p>
            <p>sadffffffffffffffffffffffffffffff</p>
            <p>sadffffffffffffffffffffffffffffff</p>
            <p>sadffffffffffffffffffffffffffffff</p>
            <p>sadffffffffffffffffffffffffffffff</p>
            <p>sadffffffffffffffffffffffffffffff</p>
            <p>sadffffffffffffffffffffffffffffff</p>
            <p>sadffffffffffffffffffffffffffffff</p>
            <p>sadffffffffffffffffffffffffffffff</p>
            <p>sadffffffffffffffffffffffffffffff</p>
            <p>sadffffffffffffffffffffffffffffff</p>
            <p>sadffffffffffffffffffffffffffffff</p>
            <p>sadffffffffffffffffffffffffffffff</p>
            <p>sadffffffffffffffffffffffffffffff</p>

        </div>
        </>
    );
}