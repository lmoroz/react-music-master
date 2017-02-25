import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artist: null,
            tracks: null
        };
    }
    componentWillMount() {
        this.setState({
            query: localStorage.getItem('query') || '',
            artist: JSON.parse(localStorage.getItem('artist')),
            tracks: JSON.parse(localStorage.getItem('tracks'))
        });
    }
    search() {
        const BASE_URL = 'https://api.spotify.com/v1/search?type=artist&limit=1&q=';
        const QUERY_URL = `${BASE_URL}${encodeURIComponent(this.state.query)}`;
        const ALBUMS_URL = 'https://api.spotify.com/v1/artists/';
        // console.log(QUERY_URL);
        localStorage.setItem('query', this.state.query);
        fetch(QUERY_URL)
            .then(data => data.json())
            .then((json) => json.artists.items[0])
            .then((artist) => {
                this.setState({artist});
                localStorage.setItem('artist', JSON.stringify(artist));
                const TRACKS_URL = `${ALBUMS_URL}${artist.id}/top-tracks?country=GB`;
                // console.log(TRACKS_URL);
                fetch(TRACKS_URL)
                    .then(data => data.json())
                    .then(json => {
                        // console.log(json);
                        this.setState({tracks: json.tracks});
                        localStorage.setItem('tracks', JSON.stringify(json.tracks));
                    });
            });
    }
    render() {
        return (
            <div className="App">
                <div className="App-title">Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="search an artist…"
                            value={this.state.query}
                            onChange={event => this.setState({ query: event.target.value })}
                            onKeyPress={event => { if (event.key === 'Enter') this.search(); }}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search" />
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    {
                        this.state.artist !== null ?
                            <div>
                                <Profile artist={this.state.artist} />
                                <Gallery tracks={this.state.tracks} />
                            </div>
                        : <div />
                    }
                </FormGroup>
            </div>
        );
    }
}

export default App;
