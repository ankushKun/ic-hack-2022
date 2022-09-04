export default function loginCheck(notLoggedIn, loggedIn) {
  if (typeof window !== undefined) {
    const auth = localStorage.getItem("auth");
    const bool = JSON.parse(localStorage.getItem("loggedin"));
    if (!bool && !auth) {
      notLoggedIn();
    } else {
      loggedIn();
    }
  }
}
