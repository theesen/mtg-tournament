/**
 * Created by t.gieselmann on 11/13/16.
 */

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {tournaments: []};
    }

    componentDidMount(){
        client({method: 'GET', path: '/api/tournaments'}).done(response => {
            this.setState({tournaments: response.entity._embedded.tournaments});
        });
    }

    render(){
        return(
            <TournamentList tournaments={this.state.tournaments}/>
        )
    }

}

class TournamentList extends React.Component{
    render() {
        var tournaments = this.props.tournaments.map(tournament =>
            <Tournament key={tournament._links.self.href} employee={tournament}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                </tr>
                {tournaments}
                </tbody>
            </table>
        )
    }
}

class Tournament {
    render(){
        return (
            <tr>
                <td>{this.props.tournament}</td>
            </tr>
        )
    }
}
