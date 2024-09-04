import React from 'react';
import './PlaylistPage.css';

const PlaylistPage = () => {
  const [recentPlays] = React.useState(['Song A', 'Song B', 'Song C']);
  const [playlists] = React.useState([
    { name: 'Chill Vibes', image: 'https://i.pinimg.com/originals/1e/89/81/1e8981d419b178ba697a1f6c1a759aac.jpg' },
    { name: 'Top Hits', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7HFX-vO2eOb-HuHsPr4qFFYssz3MC_lpEw&s' },
    { name: 'Classics', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkUoGK8YX39_5nff5OHY3sNkC3X0EAVrrDcg&s' },
    { name: 'New Releases', image: 'https://i.ytimg.com/vi/W1Zt5pBGOac/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDyjd43tm2o3DhyKcJKqv6Cs0hlZQ' },
  ]);

  const handleSearchClick = () => {
    console.log('Search clicked');
  };

  const handleAddClick = () => {
    console.log('Add clicked');
  };

  return (
    <div className="playlist-page">
        <header>
            <div className="playlist-header">
                <div className="header-left">
                <img src="https://via.placeholder.com/50" alt="Profile" className="profile-pic"/>
                <h1>My Playlist</h1>
                </div>
                <div className="header-right">
                <button className="search-button" onClick={handleSearchClick}>
                    <i className="fa fa-search"></i>
                </button>
                <button className="add-button" onClick={handleAddClick}>
                    <i className="fa fa-plus"></i>
                </button>
                </div>
            </div>
        </header>



      <section className="songs-section">
        <h2>Playlists</h2>
        <div className="songs-container">
          {playlists.length > 0 ? (
            playlists.map((playlist, index) => (
              <div key={index} className="song-card">
                <img src={playlist.image} alt={playlist.name} className="card-image" />
                <h3 className="card-title">{playlist.name}</h3>
              </div>
            ))
          ) : (
            <p>No playlists available</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default PlaylistPage;
