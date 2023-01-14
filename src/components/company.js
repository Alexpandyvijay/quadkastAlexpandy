function CompanyDesign(props){
    return(
        <div id='project-design'>
            <div>
                <img src={props.obj.image} alt='img'></img>
                <span>{props.obj.name}</span>
            </div>
            <div>{props.obj.budget}</div>
        </div>
    );
}
export default function Company(){
    const pro = [
        {
            image : require('./image/facebook.png'),
            name : 'FaceBook',
            budget : '$14,000'
        },
        {
            image : require('./image/slack.png'),
            name : 'Slack',
            budget : '$12,000'
        },
        {
            image : require('./image/spotify.png'),
            name : 'Spotify',
            budget : '$13,000'
        },
        {
            image : require('./image/xd.png'),
            name : 'Adobe',
            budget : '$15,000'
        }
    ]
    return(
        <div id='project'>
            <div>Projects</div>
            <div id='check'>
                <img src={require('./image/check.png')} alt='img'></img>
                <span>30 done this month</span>
            </div>
            <div id='tableHead'>
                <span>COMPANIES</span>
                <span>BUDGET</span>
            </div>
            <div id='list'>
                {
                    pro.map((val,i)=>(<CompanyDesign obj={val} key={i}/>))
                }
            </div>
        </div>
    )
}