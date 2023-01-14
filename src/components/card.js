import {useState,useEffect} from 'react';
import './card.css'

function CardDesign(props){
    const [col,setCol] = useState({color : 'green'})
    useEffect(()=>{
        if(!props.obj.sign){
            setCol({color : 'red'})
        }
    },[]);
    return(
        <div id='single-design'>
            <div id='name'>
                <div>{props.obj.title}</div>
                <div><span>{props.obj.value}</span><span style={col}>{props.obj.per}</span></div>
            </div>
            <div id='card-icon'>
                <img src={props.obj.image} alt='img'></img>
            </div>
        </div>
    );
}

export default function Card(){
    const cardValue = [
        {
            title : "Today's Money",
            value : "$53,000",
            per : "+55%",
            image : require('./image/database2.png'),
            sign : true
        },
        {
            title : "Today's Users",
            value : "2,300",
            per : "+3%",
            image : require('./image/global.png'),
            sign : true
        },
        {
            title : "New Clients",
            value : "+3,462",
            per : "-2%",
            image : require('./image/add-friend.png'),
            sign : false
        },
        {
            title : "Sales",
            value : "$103,430",
            per : "+5%",
            image : require('./image/shopping-cart.png'),
            sign : true
        }
    ]

    return(
        <div id='card'>
            {
                cardValue.map((val,i)=>(<CardDesign obj={val} key={i}/>))
            }

        </div>
    );
}