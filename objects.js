var playlist = {
  Name:"Song"
}

function updatePlaylist(object, name, song) {
  object[name] = song;
  return object;
}