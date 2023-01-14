
function Design(props){
    return(
        <div id='design'>
            <div id='designIcon'><span style={props.obj.color}><img src={props.obj.image} alt='img'></img></span><span>{props.obj.name}</span></div>
            <div>{props.obj.value}</div>
            <div id='line'><div></div><div></div></div>
        </div>
    );
}
export default function SectionGraph(){
    const graphValue=[
        {
            color : {backgroundImage: 'linear-gradient(310deg,#7928ca,#ff0080)'},
            image : require('./image/invoice.png'),
            name : 'Users',
            value : "36K",
        },
        {
            color : {backgroundImage: 'linear-gradient(310deg,#2152ff,#21d4fd)'},
            image : require('./image/global.png'),
            name : 'Clicks',
            value : "2m",
        },
        {
            color : {backgroundImage: 'linear-gradient(310deg,#f53939,#fbcf33)'},
            image : require('./image/setting.png'),
            name : 'Sales',
            value : "435$",
        },
        {
            color : {backgroundImage: 'linear-gradient(310deg,#ea0606,#ff667c)'},
            image : require('./image/user.png'),
            name : 'Items',
            value : "43",
        }

    ]
    return(
        <div id='graph'>
            <div id='graph-left'>
                <img src={require('./image/bargraph.png')} alt='img'></img>
                <div>Active Users</div>
                <div>&#40;+23%&#41; than last week</div>
                <div id='row-graph'>
                    {graphValue.map((val,i)=>(<Design obj={val} key={i}/>))}
                </div>
            </div>
            <div id='graph-right'>
                <div>Sales overview</div>
                <div>&#x2191; 4% more in 2021</div>
                <img src={require('./image/plotgraph.png')} alt='img'></img>
            </div>
        </div>

    );
}