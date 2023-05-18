import { FC } from 'react';
import { BasicPlayerProps } from '../../../interfaces';
import { playList } from '../playlist';
import './BasicPlayer.css';

const BasicPlayer: FC<BasicPlayerProps> = ({ isPlaying, togglePlaying, trackIndex, setTrackIndex }) => {
  function className(): string {
    const classes: string[] = ['player-icon'];

    isPlaying ? classes.push('playing') : classes.push('paused');

    return classes.join(' ');
  }

  function toPrevTrack(): void {
    if (trackIndex - 1 < 0) {
      setTrackIndex(playList.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  }

  function toNextTrack(): void {
    if (trackIndex < playList.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  }

  return (
    <div className='basic-player'>
      <button className='player-icon prev' onClick={toPrevTrack}></button>
      <button className={className()} onClick={togglePlaying}></button>
      <button className='player-icon next' onClick={toNextTrack}></button>
    </div>
  );
}

export { BasicPlayer };
