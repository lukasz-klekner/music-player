import { useState, useEffect } from 'react'
import './App.css'
import { Heading } from './Heading'
import { SongPlayer } from './SongPlayer'
import { SongListItem } from './SongListItem'
import { Songs } from './Songs'

export function App() {
  const URL = 'https://examples.devmastery.pl/songs-api/songs'

  const [songs, setSongs] = useState([])
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const currentSong = songs[currentSongIndex]

  useEffect(() => {
    fetch(URL).then((response) => {
      if (response.ok) {
        response.json().then(setSongs)
      }
    })
  }, [])

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
      {songs.length === 0 ? (
        'Loading'
      ) : (
        <>
          {' '}
          <SongPlayer song={currentSong} />
          <Songs>
            <Heading title='Songs' />
            <ul>
              {songs.map((song) => (
                <SongListItem
                  key={song.audioUrl}
                  song={song}
                  isCurrent={song.audioUrl === currentSong.audioUrl}
                  onSelect={handleSelectSong}
                />
              ))}
            </ul>
          </Songs>
        </>
      )}
    </div>
  )
}
