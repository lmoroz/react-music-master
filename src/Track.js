import React from 'react';

const Track = ({onClick, track, active}) => (
    <div
        className={`track ${active}`}
        onClick={onClick}
    >
        <img
            src={track.album.images[0].url}
            alt={track.name}
            title={track.name}
        />
        <div className="track-title">
            <div className="track-name">{track.name}</div>
            from <span className="album-name">{track.album.name}</span>
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

Track.propTypes = {
    active: React.PropTypes.string,
    onClick: React.PropTypes.func,
    track: React.PropTypes.object,
};

export default Track;
