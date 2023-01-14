export default function SectionRocket(){
    return(
        <div id='rocket'>
            <div id='rocket-left'>
                <div>
                    <p>Built by developers</p>
                    <h5>Soft UI Dashboard</h5>
                    <p>From colors, cards, typography to complex element, you will find the full documentation.</p>
                    <p>Read More &#x2192;</p>
                </div>
                <div>
                    <img src={require('./image/rocket-white.png')} alt='img'></img>
                </div>
            </div>
            <div id='rocket-right'>
                <div>
                    <h5>Work with the rockets</h5>
                    <p>Wealth creation is an evolutionarily recent-positive sum game. It is all about who take the opportunity first.</p>
                    <p>Read More &#x2192;</p>
                </div>
            </div>
        </div>
    );
}