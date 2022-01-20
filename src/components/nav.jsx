import React from "react";


export class Nav extends React.Component {
    render() {
        return (<nav>
            <div>
                <a href="/">Home</a>
            </div>
            <div>
                <a href="/favorites">Favorites</a>
            </div>
        </nav >
        );

    }
}
