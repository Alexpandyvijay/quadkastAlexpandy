export default function NavBar(){
    return (
        <aside id='left'>
            <div id='logo'>
                <img src={require('./image/logo.png')} alt='logo'></img>
                <span>Soft UI Dashboard</span>
            </div>
            <div id='navbar'>
                <div>
                    <span className='navIcon'><img src={require('./image/dashboard.png')} alt='img'></img></span>
                    <span>Dashboard</span>
                </div>
                <div>
                    <span className='navIcon'><img src={require('./image/database.png')} alt='img'></img></span>
                    <span>Tables</span>
                </div>
                <div>
                    <span className='navIcon'><img src={require('./image/invoice.png')} alt='img'></img></span>
                    <span>Billing</span>
                </div>
                <div>
                    <span className='navIcon'><img src={require('./image/augmented-reality.png')} alt='img'></img></span>
                    <span>Virtual Reality</span>
                </div>
            </div>
            <button id='upgrade'>UPGRADE TO PRO</button>
        </aside>
    );
}