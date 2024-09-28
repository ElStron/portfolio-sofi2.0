import"https://code.iconify.design/iconify-icon/2.0.0/iconify-icon.min.js";import"./LanguageFlag.astro_astro_type_script_index_0_lang.BnP4WC8V.js";const l=document;l.addEventListener("DOMContentLoaded",function(){const e=l.getElementById("skills__avatar"),t=l.querySelector(".skills__popup"),n=l.querySelector(".btn__red "),o={root:null,rootMargin:"0px",threshold:.5},r=(i,c)=>{i.forEach(m=>{m.isIntersecting?(t.classList.add("active"),n.addEventListener("click",function(){t.classList.remove("active")})):t.classList.remove("active")})};new IntersectionObserver(r,o).observe(e)});const E=document.querySelector(".btn__red"),S=document.querySelector(".popup");E.addEventListener("click",()=>{S.close()});const _="&api_key=wmbjfv0ybbzjsaceaojxrbm9aaelzzq2bbe7mgws",w=async e=>{const t=_,o=`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${e}`)}&api_key=${t}`;try{const r=await fetch(o);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const s=await r.json();if(s.items&&s.items.length>0)return s.items;throw new Error("No videos found in the feed.")}catch(r){throw console.error("Error fetching videos:",r),r}},L=document.querySelector(".youtube__button"),q=document.querySelector(".modal__close__button"),$=document.querySelector(".youtubeThumbnail"),P=document.querySelector("iframe"),j="UC36_js-krsAHAEAWpEDhHtw",I=(e,t)=>{const n=e.getAttribute("vnum"),o=t[n],s=`https://youtube.com/embed/${o.link.split("v=")[1]}?controls=1&autoplay=1`;e.setAttribute("src",s),$.style.backgroundImage=o.thumbnail===""?"url('/img/portadaLIVE.png')":`url(${o.thumbnail})`,L.addEventListener("click",()=>{document.querySelector("dialog").showModal(),e.setAttribute("src",s)}),q.addEventListener("click",()=>{document.querySelector("dialog").close(),P.setAttribute("src","")})},C=async e=>{try{const t=await w(j);I(e,t)}catch(t){console.error("Error loading video:",t)}},f=document.getElementsByClassName("latestVideoEmbed");f.length>0&&C(f[0]);const d=document.querySelector(".toast-alerts");function a(e,t="info"){if(!d){console.error("Toast container not found.");return}let n;switch(t){case"success":n="success";break;case"error":n="error";break;case"warning":n="warning";break;default:n="info"}const o=document.createElement("div");o.classList.add("toast-message",n),o.innerHTML=e,d.appendChild(o),d.classList.add("show"),document.querySelectorAll(".toast-message"),setTimeout(()=>{o.remove()},5e3)}const u=document.querySelector(".loader");let M="el mensaje se envió correctamente 🚀",T="debes completar todos los campos 🙄";const A=()=>{document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("form");async function t(o){const r=new FormData(o);try{u.classList.add("success");const s=await fetch("/api/email-sender",{method:"POST",body:r});if(s.ok){const i=await s.json();document.querySelector("#nameError").textContent="",document.querySelector("#emailError").textContent="",document.querySelector("#subjectError").textContent="",document.querySelector("#messageError").textContent="",u.classList.remove("success"),o.reset(),a(M,"success")}else u.classList.remove("success"),a(T,"error")}catch(s){console.error("Error:",s)}}e.addEventListener("submit",o=>{o.preventDefault(),t(e)});function n(o){const r=e.querySelector(`#${o}`),s=r.value.trim(),i=document.getElementById(`${o}Error`);let c="";switch(o){case"name":s===""&&(c="Please enter your name.",a(c,"warning"));break;case"email":s===""?(c="Please enter your email.",a(c,"warning")):/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s)||(c="Please enter a valid email.",a(c,"warning"));break;case"subject":s===""&&(c="Please enter a subject.",a(c,"warning"));break;case"message":s===""&&(c="Please enter your message.",a(c,"warning"));break}i.textContent=c,r.classList.toggle("input-error",!!c)}["name","email","subject","message"].forEach(o=>{e.querySelector(`#${o}`).addEventListener("blur",()=>n(o))})})};A();const x=document.getElementById("bg-icons"),D=20;for(let e=0;e<D;e++){const t=document.createElement("span");x.appendChild(t)}async function h(e="data"){const t=e!=="data"?e:"all";try{const n=await fetch(`https://portfolio-sofi2-0.vercel.app/api/${t}`);if(!n.ok)throw new Error(`Error fetching data: ${n.status}`);return(await n.json())[e]}catch(n){return console.error(`Failed to fetch ${e} :`,n),null}}const{user:p}=await h(),B=document.getElementById("profile-picture");function v(e){B.src=e?p.profilePicture2:p.profilePicture}v(document.documentElement.classList.contains("dark"));window.addEventListener("themeChange",e=>{v(e.detail.isDark)});const{skills:y}=await h(),g=e=>e.map(t=>({sort:Math.random(),value:t})).sort((t,n)=>t.sort-n.sort).map(t=>t.value),H=document.querySelector(".image__button"),k=document.querySelector(".hero__skills"),V=g(y).slice(0,7);k.innerHTML=V.map((e,t)=>`
        <div class="icon__container skill-${t}" >
      <iconify-icon
        class="skills__icons "
        icon="${e.icon}"
      ></iconify-icon>
      </div>
    `).join("");H.addEventListener("click",()=>{const e=g(y).slice(0,7);k.innerHTML=e.map((t,n)=>`

        <div class="icon__container skill-${n}">
      <iconify-icon
        class="skills__icons "
        icon="${t.icon}"
      ></iconify-icon>
      </div>
    `).join("")});const U=document.querySelector(".image__button"),O=document.querySelectorAll(".hero__skills");let b=0;function z(){b++,b===9&&(document.documentElement.classList.add("customScheme"),document.documentElement.classList.remove("dark","dark-mode"),localStorage.setItem("theme","customScheme"),O.forEach(e=>{e.style.display="none"}))}U.addEventListener("click",z);const N=document.querySelector(".btn__red"),R=document.querySelector(".popup");N.addEventListener("click",()=>{R.close()});
