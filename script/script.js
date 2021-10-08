document.querySelectorAll('article').forEach((e) => {
    e.addEventListener('click', () => {
        location.assign('article.html')
    })    
})

let lightTheme = "styles/light.css";
let darkTheme = "styles/dark.css";

function changeTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == lightTheme) {
    theme.href = darkTheme;
    darkMode.innerHTML = "Light Mode 🌞";
  } else {
    theme.href = lightTheme;
    darkMode.innerHTML = "Dark Mode 🌙";
  }
}
