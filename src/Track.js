import React from 'react';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render () {
        return (
            <div
                className={`track ${this.props.active}`}
                onClick={this.props.onClick}
            >
                <img
                    src={this.props.track.album.images[0].url}
                    alt={this.props.track.name}
                    title={this.props.track.name}
                />
                <div className="track-title">
                    <div className="track-name">{this.props.track.name}</div>
                    from <span className="album-name">{this.props.track.album.name}</span>
                </div>
                <div className="track-toggle">
                    <div className="play">
                        &#9654;
                    </div>
                    <div className="pause">
                        | |
                    </div>
                </div>
            </div>
        );
    }
}

Track.propTypes = {
    track: React.PropTypes.object,
    active: React.PropTypes.string,
    onClick: React.PropTypes.func,
};

export default Track;
