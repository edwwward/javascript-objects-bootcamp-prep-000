var playlist = {
  Name:"Song"
}

function updatePlaylist(playlist, name, song) {
  playlist[name] = song;
  return playlist;
}