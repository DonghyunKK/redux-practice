import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongList = (props) => {
  const renderList = props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => props.selectSong(song)} 
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
    console.log(props)
  return (
    <div className="ui divided list">
      {renderList}
    </div>
  )
};

// By convention function name is called mapStateToProps 
const mapStateToProps = state => {
  return { songs: state.songs } 
}

export default connect(mapStateToProps, { selectSong })(SongList);

//senario
// always going to import connect, call connect and pass our component as a seconde function call, define mapStateToProps. mapStateToProps always going to get a first argument of state, and always going to return and object that is going to show as props inside our component. 