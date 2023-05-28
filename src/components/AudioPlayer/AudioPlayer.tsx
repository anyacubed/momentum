import { FC, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { BasicPlayer } from './BasicPlayer/BasicPlayer';
// import { AdvancedPlayer } from './AdvancedPlayer/AdvancedPlayer';
import { playlist } from './playlist';
import './AudioPlayer.css';

const AudioPlayer: FC = () => {
  const [trackIndex, setTrackIndex] = useState<number>(0);
  // const [currentTrack, setCurrentTrack] = useState<PlayListI>(playList[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef(new Audio(require(`./${playlist[trackIndex].src}`)));
  const [isReady, setIsReady] = useState<boolean>(false);

  const { isAudioDisplayed } = useSelector((state: RootState) => state.display);

  function togglePlaying(): void {
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current.pause();
    } else {
      setIsPlaying(true);
      audioRef.current.play();
    }
  }

  function playlistItemClassName(track: string): string {
    const classes: string[] = ['playlist-item'];

    track === playlist[trackIndex].title && classes.push('active');

    return classes.join(' ');
  }

  function containerClassName(): string {
    const classes: string[] = ['audio-player'];

    !isAudioDisplayed && classes.push('hidden');

    return classes.join(' ');
  }

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(require(`./${playlist[trackIndex].src}`));

    if (isReady) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      setIsReady(true);
    }
  }, [trackIndex]);

  return (
    <div className={containerClassName()}>
      <div className='audio-player-controls'>
        <BasicPlayer isPlaying={isPlaying} togglePlaying={togglePlaying} trackIndex={trackIndex} setTrackIndex={setTrackIndex} />
        {/* <AdvancedPlayer isPlaying={isPlaying} togglePlaying={togglePlaying} /> */}
      </div>
      <ul className='playlist'>
        {playlist.map(track => <li
          key={track.title}
          className={playlistItemClassName(track.title)}
        >
          {track.title}
        </li>)}
      </ul>
    </div>
  );
}

export { AudioPlayer };
