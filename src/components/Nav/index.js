import React from 'react';

function Nav({ currentPage, setCurrentPage }) {
    return (
        <sidebar>
            <h1 className={`side pointer`} onClick={() => setCurrentPage('about')}>dan <br /> <span className={`brighter ${currentPage==="about" && 'nav-highlighted'}`}>brack <br /> enbury</span></h1>
            <h1 className={`top pointer`} onClick={() => setCurrentPage('about')}>dan<span className={`brighter ${currentPage==="about" && 'nav-highlighted'}`}>brack</span></h1>

            <nav className="side">
                <ul>
                    <br />
                    <li><a className={currentPage==="code" && 'nav-highlighted'} onClick={() => setCurrentPage('code')}>//* <br /> developer</a></li> <br />
                    <li><a className={currentPage==="sound" && 'nav-highlighted'} onClick={() => setCurrentPage('sound')}>//** <br /> sound <br/> designer</a></li> <br />
                    <li><a className={currentPage==="music" && 'nav-highlighted'} onClick={() => setCurrentPage('music')}>//*** <br /> musician</a></li> <br />
                    <li><a className={currentPage==="contact" && 'nav-highlighted'} onClick={() => setCurrentPage('contact')}>//**** <br /> resume & experience</a></li>
                </ul>
            </nav>

            <nav className="top">
                <ul>
                    <li><a className={currentPage==="code" && 'nav-highlighted'} onClick={() => setCurrentPage('code')}> dev </a></li>
                    <li><span className="brighter">//</span></li>
                    <li><a className={currentPage==="sound" && 'nav-highlighted'} onClick={() => setCurrentPage('sound')}> sound </a></li>
                    <li><span className="brighter">//</span></li>
                    <li><a className={currentPage==="music" && 'nav-highlighted'} onClick={() => setCurrentPage('music')}> mus </a></li>
                    <li><span className="brighter">//</span></li>
                    <li><a className={currentPage==="contact" && 'nav-highlighted'} onClick={() => setCurrentPage('contact')}> resume </a></li>
                </ul>
            </nav>
        </sidebar>
    );
}

export default Nav;
