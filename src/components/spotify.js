export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectURI = "http://localhost:3000/"

const clientID = "cff1db8544324bac899f1793e9269198"

const scopes = [
    "user-follow-read",
    "user-follow-modify",
    "user-read-recently-played",
    "user-read-playback-position",
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state"
]

export const getTokenFromResponse = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };
export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`