import React, { useState, useEffect } from 'react';
import '../App.css';
const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    profilePic: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    displayName: 'John Doe',
    username: '@johndoe',
    bio: 'Music lover and playlist curator.',
    favoriteGenres: [],
    topArtists: [],
    favoriteSongs: [],
    curatedPlaylists: [],
    collaborativePlaylists: [],
    recentPlays: [],
    activityFeed: [],
    friends: [],
    commentsLikes: [],
    achievements: [],
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    setProfileData((prevState) => ({
      ...prevState,
      displayName: user.email || prevState.displayName,
    }));
  }, []);

  return (
    <div className="profile-page">
      <div className="back-btn-arrow"><button><i class="fa fa-arrow-left"></i></button></div>
      <header className="profile-header">
        <img src={profileData.profilePic} alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <h1>{profileData.displayName} <span>{profileData.username}</span></h1>
          <button className="edit-button">Edit</button>
          <p>{profileData.bio}</p>
        </div>
      </header>
      
      <section className="profile-artists">
        <h2>Top Artists</h2>
        <ul>
          {profileData.topArtists.length > 0 ? (
            profileData.topArtists.map((artist, index) => (
              <li key={index}>{artist}</li>
            ))
          ) : (
            <li>No top artists listed</li>
          )}
        </ul>
      </section>

      <section className="profile-songs">
        <h2>Favorite Songs</h2>
        <ul>
          {profileData.favoriteSongs.length > 0 ? (
            profileData.favoriteSongs.map((song, index) => (
              <li key={index}>{song}</li>
            ))
          ) : (
            <li>No favorite songs listed</li>
          )}
        </ul>
      </section>


      <section className="profile-activity">
        <h2>Recent Plays</h2>
        <ul>
          {profileData.recentPlays.length > 0 ? (
            profileData.recentPlays.map((song, index) => (
              <li key={index}>{song}</li>
            ))
          ) : (
            <li>No recent plays listed</li>
          )}
        </ul>

      </section>

      <section className="profile-playlists">
        <h2>Playlists</h2>
        <ul>
          {profileData.favoriteSongs.length > 0 ? (
            profileData.favoriteSongs.map((song, index) => (
              <li key={index}>{song}</li>
            ))
          ) : (
            <li>No playlists listed</li>
          )}
        </ul>
      </section>
    </div>
  );
};

export default ProfilePage;