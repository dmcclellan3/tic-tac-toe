(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const d=document.querySelectorAll(".cell"),m=document.querySelector(".restart-button"),l=document.querySelector("#status-text"),c=document.querySelectorAll(".cell");let o="X",u=!1;const f=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];C();m.addEventListener("click",g);function C(){document.querySelectorAll(".cell").forEach(e=>e.addEventListener("click",x)),l.textContent=`${o}'s turn`}function x(e,r){if(u)return;const s=e.target.closest(".cell");s.textContent===""&&(s.textContent=o,h(),p())}function y(){o==="X"&&(l.textContent="O wins!"),o==="O"&&(l.textContent="X wins!")}function p(){u=!1;for(let e=0;e<f.length;e++){const r=f[e][0],s=f[e][1],i=f[e][2];if(!(c[r].textContent===""||c[s].textContent===""||c[i].textContent==="")){if(c[r].textContent===c[s].textContent&&c[r].textContent===c[i].textContent){u=!0,y();break}!u&&!Array.from(c).some(t=>t.textContent==="")&&(l.textContent="Draw!")}}}function h(){o=o=="X"?"O":"X",l.textContent=`${o}'s turn`}function g(){o="X",l.textContent=`${o}'s turn`,d.forEach(e=>e.textContent=""),u=!1}