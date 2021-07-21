import './SongListItem.css'

export function SongListItem({
  song,
  song: { title, artist },
  isCurrent,
  onSelect,
}) {
  function handleClick() {
    onSelect(song)
  }
  return (
    <li
      className={`SongListItem ${isCurrent ? 'selected' : ''}`}
      onClick={handleClick}
      style={{ background: isCurrent ? 'darkslategrey' : '' }}
    >
      {title} by {artist}
    </li>
  )
}
