export default function Header(){
    return(
        <div id='header'>
            <div id='left-head'>
                <div><span>Pages</span> / Dashboard</div>
                <div>Dashboard</div>
            </div>
            <div id='right-head'>
                <div id='search'>
                    <img src={require('./image/search.png')} alt='img'></img>
                    <input type='text' placeholder='Type here...'></input>
                </div>
                <button>ONLINE BUILDER</button>
                <div id='signin'><img src={require('./image/user.png')} alt='img'></img><span>Sign In</span></div>
                <img src={require('./image/setting.png')} alt='img'></img>
                <img src={require('./image/bell.png')} alt='img'></img>
            </div>
        </div>
    );
}