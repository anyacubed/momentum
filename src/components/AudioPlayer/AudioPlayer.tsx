import { FC, useEffect, useRef, useState } from 'react';
import { BasicPlayer } from './BasicPlayer/BasicPlayer';
import { AdvancedPlayer } from './AdvancedPlayer/AdvancedPlayer';
import { playList } from './playlist';
import './AudioPlayer.css';

const AudioPlayer: FC = () => {
  const [trackIndex, setTrackIndex] = useState<number>(0);
  // const [currentTrack, setCurrentTrack] = useState<PlayListI>(playList[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef(new Audio(require(`./${playList[trackIndex].src}`)));
  const [isReady, setIsReady] = useState<boolean>(false);

  // const intervalRef = useRef();
	// const { duration } = audioRef.current;

  function togglePlaying(): void {
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current.pause();
    } else {
      setIsPlaying(true);
      audioRef.current.play();
    }
  }

  const className = (track: string): string => {
    const classes: string[] = ['play-list-item'];

    track === playList[trackIndex].title && classes.push('active');

    return classes.join(' ');
  }

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(require(`./${playList[trackIndex].src}`));

    if (isReady) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      setIsReady(true);
    }
  }, [trackIndex]);

  return (
    <div className='audio-player'>
      <div className='audio-player-controls'>
        <BasicPlayer isPlaying={isPlaying} togglePlaying={togglePlaying} trackIndex={trackIndex} setTrackIndex={setTrackIndex} />
        {/* <AdvancedPlayer isPlaying={isPlaying} togglePlaying={togglePlaying} /> */}
      </div>
      <ul className='play-list'>
        {playList.map(track => <li
          key={track.title}
          className={className(track.title)}
        >
          {track.title}
        </li>)}
      </ul>
    </div>
  );
}

export { AudioPlayer };
