// import { userData as data } from "@src/data/userData";
import { getData } from "@src/services/data"
import { SITE_URL} from 'astro:env/client';
const {user} = await getData("user", SITE_URL);


export const profilePicture = document.getElementById("profile-picture");
  function updateProfilePicture(isDark) {
    profilePicture.src = isDark ? user.profilePicture2 : user.profilePicture;
  }

  // Inicializar la imagen de perfil según el tema actual
  updateProfilePicture(document.documentElement.classList.contains("dark"));

  // Escuchar el evento de cambio de tema
  window.addEventListener("themeChange", (event) => {
    updateProfilePicture(event.detail.isDark);
  });
