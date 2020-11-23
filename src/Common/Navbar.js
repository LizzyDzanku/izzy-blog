import React from 'react';

function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <a className="navbar-brand" href="/">Izzy Blog</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                    <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link active" href="/signin">Login</a>
                    <a className="nav-link active" href="/signup" tabindex="-1">Sign Up</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;