export const authEndpoint = "https://accounts.spotify.com/authorize";
//Remove After Debuging
const redirectUri = "http://localhost:3000/";
//const redirectUri = "https://spotify-clone-shivppatel.herokuapp.com/";
const clientId = "5ec51c1d3184463ea630d9c50ac15d9d";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-library-read",
    "user-modify-playback-state",
    "user-library-modify",
]
export const getTokenFromURL = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial
    }, {});
}
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;