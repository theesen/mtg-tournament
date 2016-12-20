/**
 * Created by t.gieselmann on 11/13/16.
 */
'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tournaments: []};
        this.fetchTournaments = this.fetchTournaments.bind(this);
    }

    componentDidMount() {
        this.fetchTournaments();
    }

    fetchTournaments() {
        console.log('yeah');
        axios.get('/api/tournament').then(response => {
            this.setState({tournaments: response.data._embedded.tournament});
        });
    };

    render() {
        const tournaments = this.state.tournaments.map((tournament) => <li key={tournament._links.self.href}>{tournament.name}</li>);
        return (
            <div>
                <ul>{tournaments}</ul>
                <TournamentForm handleOnSubmit={this.fetchTournaments}/>
            </div>
        )
    }
}

class TournamentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('api/tournament', {
            name: this.state.name
        }).then(response => {
            this.props.handleOnSubmit();
            this.setState({name: ''});
        });


        console.log('A new Tournament was submitted ' + this.state.name);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:<input type="text" value={this.state.name} onChange={this.handleChange}/></label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
