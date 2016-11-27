/**
 * Created by t.gieselmann on 11/13/16.
 */
'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tournaments: []};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/tournament'}).then(response => {
            this.setState({tournaments: response.entity._embedded.tournament});
        });
    }


    render() {
        console.log(this.state.tournaments);
        const tournaments = this.state.tournaments.map((tournament) => <li key={tournament._links.self.href}>{tournament.name}</li>);
        return (
            <ul>{tournaments}</ul>
        )
    }

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
