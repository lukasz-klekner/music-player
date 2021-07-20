import './App.css'

function Heading({ title }) {
  return <h1>{title}</h1>
}

function SongPlayer({ showControls = true, song: { audioUrl, coverUrl } }) {
  return (
    <section>
      <Heading title='Music Player' />
      <img width='250' height='250' src={coverUrl} alt='Song cover' />
      <audio key={audioUrl} controls={showControls}>
        <source src={audioUrl} />
      </audio>
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
  const currentSong = songs[1]

  function handleSelectSong(selectedSong) {
    console.log(selectedSong)
  }

  return (
    <div className='App'>
      <SongPlayer showControls song={currentSong} />
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
