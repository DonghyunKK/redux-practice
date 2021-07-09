// file name (index.js) is convention for import. if you don't specify the file name on route when you import, webpack automatically import index file from that folder.

// Action creator
export const selectSong = song => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
