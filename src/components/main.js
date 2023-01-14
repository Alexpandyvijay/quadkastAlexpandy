import './navbar.css';
import './header.css';
import './section1.css';
import './section2.css';
import './company.css';
import NavBar from './navbar';
import Header from './header';
import Card from './card';
import SectionRocket from './section1';
import SectionGraph from './section2';
import Company from './company';
export default function Main(){
    return (
        <div id="main">
            <NavBar/>
            <aside id='right'>
                <Header/>
                <Card/>
                <SectionRocket/>
                <SectionGraph/>
                <Company/>
            </aside>

        </div>
    )
}