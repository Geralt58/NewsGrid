document.querySelectorAll('article').forEach((e) => {
   e.addEventListener('click', () => {
      location.assign('article.html')
   })
})

let lightTheme = 'css/light.css'
let darkTheme = 'css/dark.css'
let darkLogo = 'img/logo.png'
let lightLogo = 'img/logo_light.png'

function changeTheme() {
   let darkMode = document.getElementById('dark-mode')
   let theme = document.getElementById('theme')
   let logo = document.getElementById('logo')
   if (
      theme.getAttribute('href') == lightTheme &&
      logo.getAttribute('src') == darkLogo
   ) {
      theme.href = darkTheme
      logo.src = lightLogo
      darkMode.innerHTML = 'Light Mode 🌞'
   } else {
      theme.href = lightTheme
      logo.src = darkLogo
      darkMode.innerHTML = 'Dark Mode 🌙'
   }
}
