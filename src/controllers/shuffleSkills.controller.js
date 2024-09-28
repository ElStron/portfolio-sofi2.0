import { getData } from "@src/services/data"
import { SITE_URL} from 'astro:env/client';
const {skills} = await getData( "skills", SITE_URL );

// import { skillsData } from "@data/skillsData.js";

/* Shuffle initial function */
export const shuffle = (array) => {
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

/* shuffle on click */
export const buttonShuffle = document.querySelector(".image__button");
const skillIcons = document.querySelector(".hero__skills");
const inicialSkills = shuffle(skills).slice(0, 7);
skillIcons.innerHTML = inicialSkills
  .map(
    (skill, index) => `
        <div class="icon__container skill-${index}" >
      <iconify-icon
        class="skills__icons "
        icon="${skill.icon}"
      ></iconify-icon>
      </div>
    `
  )
  .join("");
buttonShuffle.addEventListener("click", () => {
  const shuffledSkills = shuffle(skills).slice(0, 7);
  skillIcons.innerHTML = shuffledSkills
    .map(
      (skill, index) => `

        <div class="icon__container skill-${index}">
      <iconify-icon
        class="skills__icons "
        icon="${skill.icon}"
      ></iconify-icon>
      </div>
    `
    )
    .join("");
});
