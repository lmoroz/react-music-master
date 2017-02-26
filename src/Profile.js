import React from 'react';

const Profile = ({artist}) => (
    <div className="profile">
        <img
            alt="Profile"
            src={artist.images[artist.images.length - 1].url} className="profile-img"
        />
        <div className="profile-info">
            <div className="profile-name">{artist.name}</div>
            <div className="profile-followers">
                {artist.followers.total} followers
            </div>
            <div className="profile-genres">
                {
                    artist.genres.map((genre, key) => {
                        const genrestring = (key === (artist.genres.length - 1)) ?
                            `${genre}` : `${genre}, `;
                        return (
                            <span key={key}>{genrestring}</span>
                        );
                    })
                }
            </div>
        </div>
    </div>
);

Profile.propTypes = {
    artist: React.PropTypes.object,
};

export default Profile;
