import { useRef } from 'react'
import './SongPlayer.css'
import { Heading } from './Heading'

export function SongPlayer({
  showControls = false,
  song: { audioUrl, coverUrl },
}) {
  const audioRef = useRef()
  return (
    <section className='SongPlayer'>
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
