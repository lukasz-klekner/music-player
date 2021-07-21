import { useState, useRef, useEffect } from 'react'
import './App.css'

function Heading({ title }) {
  return <h1>{title}</h1>
}

function SongPlayer({ showControls = false, song: { audioUrl, coverUrl } }) {
  const audioRef = useRef()
  return (
    <section>
      <Heading title='Music Player' />
      <img width='250' height='250' src={coverUrl} alt='Song cover' />
      <audio ref={audioRef} key={audioUrl} controls={showControls}>
        <source src={audioUrl} />
      </audio>
      <div>
        <button onClick={() => audioRef.current.play()}>Play</button>
        <button onClickCapture={() => audioRef.current.pause()}>Pause</button>
      </div>
    </section>
  )
}

function SongListItem({ song, song: { title, artist }, isCurrent, onSelect }) {
  function handleClick() {
    onSelect(song)
  }
  return (
    <li
      onClick={handleClick}
      style={{ background: isCurrent ? 'darkslategrey' : '' }}
    >
      {title} by {artist}
    </li>
  )
}

function App() {
  const songs = [
    {
      audioUrl: 'https://examples.devmastery.pl/assets/audio/deadfro5h.mp3',
      coverUrl: 'https://examples.devmastery.pl/assets/audio/deadfro5h.jpg',
      title: 'Deadfro5h',
      artist: 'starfrosh',
    },
    {
      audioUrl: 'https://examples.devmastery.pl/assets/audio/majesty.mp3',
      coverUrl: 'https://examples.devmastery.pl/assets/audio/majesty.jpg',
      title: 'Majesty (Original Mix)',
      artist: 'Ryan Craig Martin',
    },
    {
      audioUrl: 'https://examples.devmastery.pl/assets/audio/runs.mp3',
      coverUrl: 'https://examples.devmastery.pl/assets/audio/runs.jpg',
      title: 'Runs',
      artist: 'Wowa',
    },
  ]
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const currentSong = songs[currentSongIndex]

  function handleSelectSong(selectedSong) {
    const audioIndex = songs.findIndex(
      (song) => song.audioUrl === selectedSong.audioUrl
    )

    if (audioIndex >= 0) {
      setCurrentSongIndex(audioIndex)
    }
  }

  return (
    <div className='App'>
      <SongPlayer song={currentSong} />
      {songs.map((song) => (
        <SongListItem
          key={song.audioUrl}
          song={song}
          isCurrent={song.audioUrl === currentSong.audioUrl}
          onSelect={handleSelectSong}
        />
      ))}
    </div>
  )
}

export default App
