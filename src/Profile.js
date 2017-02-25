import React from 'react';
import './App.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

  // propTypes: {
  //   artist: React.PropTypes.Object.isRequired,
  // }
    render() {
        const artist =
            this.props.artist
            || {followers: { href: null, total: 2521554 },
                genres: ['alternative metal', 'alternative rock', 'garage rock', 'indie rock', 'permanent wave', 'piano rock', 'post-grunge', 'rock'],
                href: 'https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI',
                id: '12Chz98pHFMPJEknJQMWvI',
                images: [{
                    height: 133,
                    url: 'https://i.scdn.co/image/837c977024362a7f6d1873027e2a8664e21f911a',
                    width: 200}
                ],
                name: 'Muse',
                popularity: 79,
                type: 'artist',
                uri: 'spotify:artist:12Chz98pHFMPJEknJQMWvI'
            };
        return (
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
    }
}
Profile.propTypes = {
    artist: React.PropTypes.object,
};

export default Profile;
