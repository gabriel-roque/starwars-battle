import React from 'react';

import { connect } from 'react-redux';

function Audio(props) {
  return (
    <audio
      src={require('assets/media/st-rise-of-skywalker.mp3')}
      autoPlay={props.audio}
      loop
      id="music"
    ></audio>
  );
}

const mapStateToProps = state => ({
  audio: state.core.audio
});

export default connect(mapStateToProps)(Audio);
