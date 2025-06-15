import{a as f,S,i as y}from"./assets/vendor-DT131awv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const M="50718626-0f15284cd54e6013b04c57504";f.defaults.baseURL="https://pixabay.com/api/";const p=async(o,t,a)=>{const s={params:{key:M,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:a}};try{return await f.get("",s)}catch(e){throw console.error("Error fetching images:",e),e}},b=({webformatURL:o,largeImageURL:t,tags:a,likes:s,views:e,comments:r,downloads:i})=>`
        <li class='gallery-card'>
            <a href="${t}">
                <img class="gallery-img" src="${o}" alt="${a}" />
            </a>
            <div class="gallery-info">
                <p class="gallery-info-item">
                    <b>Likes</b>${s}
                </p>
                    <p class="gallery-info-item">
                <b>Views</b>${e}
                </p>
                <p class="gallery-info-item">
                    <b>Comments</b>${r}
                </p>
                <p class="gallery-info-item">
                    <b>Downloads</b>${i}
                </p>
            </div>
          </li>`,d=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery"),E=document.querySelector(".loader"),m=document.querySelector(".js-load-more");let n=1;const g=15;let l="",L=new S(".js-gallery a");const c=()=>{E.classList.toggle("is-hidden")},v=()=>{m.classList.add("is-hidden")},w=()=>{m.classList.remove("is-hidden")},h=o=>{y.error({message:o,position:"topRight",maxWidth:400})},P=()=>{const o=document.querySelector(".js-gallery .gallery-card");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}},q=async o=>{try{if(o.preventDefault(),l=d.elements.user_query.value.trim(),l==="")return;u.innerHTML="",v(),c(),n=1;const t=await p(l,n,g);if(t.data.hits.length===0){h("Sorry, there are no images matching your search query. Please try again!");return}const a=t.data.hits.map(s=>b(s)).join("");u.innerHTML=a,t.data.totalHits>15&&w(),L.refresh(),d.reset()}catch(t){console.log(t),h(`${t}`)}finally{c()}},$=async o=>{try{n+=1,v(),c();const t=await p(l,n,g),a=t.data.hits.map(e=>b(e)).join("");u.insertAdjacentHTML("beforeend",a),P(),L.refresh();const s=Math.ceil(t.data.totalHits/g);n<s?w():y.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:400})}catch(t){console.log(t),h(`${t}`)}finally{c()}};d.addEventListener("submit",q);m.addEventListener("click",$);
//# sourceMappingURL=index.js.map
