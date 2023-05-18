import { FC, useState } from 'react';
import { AdvancedPlayerProps } from '../../../interfaces';
import './AdvancedPlayer.css';

const AdvancedPlayer: FC<AdvancedPlayerProps> = ({ isPlaying, togglePlaying }) => {
  const [ currentTrackTime, setCurrentTrackTime] = useState<string>('0:00');
  const [ currentTrackLength, setCurrentTrackLength] = useState<string>('0:00');
  const [ currentTrack, setCurrentTrack] = useState<string>('Track title');
  const [ isVolumeOn, setIsVolumeOn] = useState<boolean>(false);

  const toggleVolume = (): void => {
    isVolumeOn ? setIsVolumeOn(false) : setIsVolumeOn(true);
  };

  const className = (): string => {
    const classes: string[] = ['advanced-player-item volume-button'];

    isVolumeOn && classes.push('volume-off');

    return classes.join(' ');
  };

  return (
    <div className='advanced-player'>
      <button className={isPlaying ? 'advanced-player-item toggle-play progress-pause' : 'advanced-player-item toggle-play progress-play'} onClick={togglePlaying}></button>
      <span>{currentTrackTime}/{currentTrackLength}</span>
      <div className='progress-bar'>
        <span className='track-title'>{currentTrack}</span>
        <div className='timeline'>
          <div className='progress'></div>
        </div>
      </div>
      <div className='volume-container'>
        <button className={className()} onClick={toggleVolume}></button>
        <div className='volume-line'>
          <div className='volume-progress'></div>
        </div>
      </div>
    </div>
  );
}

export { AdvancedPlayer };
