import React from 'react';
import Track from './Track';
import './App.css';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: null,
            playing: false,
            playingUrl: null,
        };
    }


    playAudio(url) {
        if (this.state.player !== null && !this.state.player.paused) {
            this.state.player.pause();
            if (this.state.player.src === url) return;
        }

        const player = new Audio(url);
        player.addEventListener('play', () => this.setState({player, playing: true, playingUrl: url}));
        player.addEventListener('pause', () => this.setState({playing: false}));
        setTimeout(() => player.play(), 500);
    }

    render () {
        return (
            <div className="gallery">
                {
                    (this.props.tracks !== null) ?
                    this.props.tracks.map((track, k) =>
                        <Track
                            track={track}
                            key={k}
                            active={
                                (this.state.player !== null && this.state.playing
                                    && this.state.playingUrl === track.preview_url
                                ) ? 'active' : ''
                            }
                            onClick={() => this.playAudio(track.preview_url)}
                        />
                    ) : <div />
                }
            </div>
        );
    }
}

Gallery.propTypes = {
    tracks: React.PropTypes.array,
};
export default Gallery;
