/* empty css                      */import{a as d}from"./assets/vendor-Cn2Vr82J.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const c={recipesList:document.querySelector(".recipes-list"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal")};function m(){c.backdrop.classList.remove("is-hidden"),document.addEventListener("keydown",u)}function a(){c.backdrop.classList.add("is-hidden"),document.removeEventListener("keydown",u)}d.defaults.baseURL="https://dummyjson.com/recipes";async function y(){const{data:t}=await d();return t}async function g(t){const{data:o}=await d(`/${t}`);return o}function v(t,o){const n=t.map(({image:i,cookTimeMinutes:e,cuisine:r,name:s,difficulty:p,id:f})=>`
  <li class="recipes-list-item">
        <img src="${i}" alt="${s}" data-id="${f}">
        <div>
          <p>${s}</p>
          <p>Cuisine: ${r}</p>
          <p>Difficulty: ${p}</p>
          <p>CookTime: ${e}</p>
        </div>
      </li>
  `).join("");o.insertAdjacentHTML("beforeend",n)}function L({image:t,name:o,ingredients:n,instructions:i}){const e=`<img class="modal-img" src="${t}" alt="${o}" />
      <div class="recipe-info">
        <p>${o}</p>
        <p>Ingredients: ${n.join(",")}</p>
        <p>Instructions:</p>
        <ol>${i.map(r=>`<li>${r}</li>`).join("")}</ol>
       <button class="add-to-favorites" type="button">Add to favorites</button>
      <button class="modal-close-btn" type="button">X</button>
      </div>`;c.modal.innerHTML=e}const l={favorites:JSON.parse(localStorage.getItem("favorites"))??[],recipe:{}};function u(t){t.code==="Escape"&&a()}async function b(t){if(t.target.nodeName!=="IMG")return;m();const o=t.target.dataset.id,n=await g(o);L(n);const i=document.querySelector(".add-to-favorites");i.addEventListener("click",e=>{h(n,e)}),console.log(i)}function $(t){t.target===t.currentTarget&&a(),t.target.classList.contains("modal-close-btn")&&a()}function h(t,o){o.target.textContent==="Add to favorites"&&(l.favorites.push(t),localStorage.setItem("favorites",JSON.stringify(l.favorites)))}document.addEventListener("DOMContentLoaded",async t=>{try{const{recipes:o}=await y();v(o,c.recipesList)}catch(o){console.log(o)}});c.recipesList.addEventListener("click",b);c.backdrop.addEventListener("click",$);
//# sourceMappingURL=index.js.map
