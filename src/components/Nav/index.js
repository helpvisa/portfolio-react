import React from 'react';

function Nav({ setCurrentPage }) {
    return (
        <sidebar>
            <h1 className="side pointer" onClick={() => setCurrentPage('about')}>dan <br /> <span className="brighter">brack <br /> enbury</span></h1>
            <h1 className="top pointer" onClick={() => setCurrentPage('about')}>dan<span className="brighter">brack</span></h1>

            <nav className="side">
                <ul>
                    <br />
                    <li><a onClick={() => setCurrentPage('sound')}>//**** <br /> sound <br/> designer</a></li> <br />
                    <li><a onClick={() => setCurrentPage('code')}>//*** <br /> developer</a></li> <br />
                    <li><a onClick={() => setCurrentPage('music')}>//** <br /> musician</a></li> <br />
                    <li><a onClick={() => setCurrentPage('contact')}>//* <br /> contact <br /> resume</a></li>
                </ul>
            </nav>

            <nav className="top">
                <ul>
                    <li><a onClick={() => setCurrentPage('sound')}> sound </a></li>
                    <li><span className="brighter">//</span></li>
                    <li><a onClick={() => setCurrentPage('code')}> dev </a></li>
                    <li><span className="brighter">//</span></li>
                    <li><a onClick={() => setCurrentPage('music')}> mus </a></li>
                    <li><span className="brighter">//</span></li>
                    <li><a onClick={() => setCurrentPage('contact')}> contact & resume </a></li>
                </ul>
            </nav>
        </sidebar>
    );
}

export default Nav;
