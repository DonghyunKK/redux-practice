import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: 'Bad Habits', artist: 'Ed Sheeran' },
    { title: 'Butter', artist: 'BTS' },
    { title: 'Deja vu', artist: 'Olivia Rodrigo' },
    { title: 'We\'re good', artist: 'Dua Lipa' }
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if ( action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});