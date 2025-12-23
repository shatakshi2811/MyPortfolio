const navLinks=document.querySelector('.nav-links');
const hamburger=document.querySelector('.hamburger');
const navLinksA=document.querySelectorAll('.nav-links a');
function toggleNavbar(){navLinks.classList.toggle('active');hamburger.classList.toggle('active')}
hamburger.addEventListener('click',toggleNavbar);
navLinksA.forEach(a=>{a.addEventListener('click',()=>{if(navLinks.classList.contains('active')){navLinks.classList.remove('active');hamburger.classList.remove('active')}})})
document.addEventListener('click',(e)=>{if(navLinks.classList.contains('active')&&!navLinks.contains(e.target)&&e.target!==hamburger&&!hamburger.contains(e.target)){toggleNavbar()}})

const scrollToTop=document.getElementById('scroll-to-top');
const navbar=document.getElementById('navbar');
const scrollThresholdNavbar=50,scrollThresholdTopButton=100;
window.addEventListener('scroll',()=>{if(window.scrollY>scrollThresholdTopButton){scrollToTop.classList.add('active')}else{scrollToTop.classList.remove('active')}
if(window.scrollY>scrollThresholdNavbar){navbar.classList.add('scrolled')}else{navbar.classList.remove('scrolled')}})
scrollToTop.addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'})})

document.addEventListener('DOMContentLoaded',()=>{const t=document.querySelector('.typing-animation');const yr=document.getElementById('yr');if(yr){yr.textContent=new Date().getFullYear()}
if(t){const s="Hello, I'm Shatakshi Chowksey";let out="",type=true,i=0,id;function step(){clearTimeout(id);if(type){if(i<s.length){out+=s[i];i++;t.textContent=out;id=setTimeout(step,100)}else{id=setTimeout(()=>{type=false;step()},2000)}}else{if(i>0){out=out.slice(0,-1);i--;t.textContent=out;id=setTimeout(step,60)}else{id=setTimeout(()=>{type=true;step()},500)}}}step()}else{console.warn("Typing animation element (.typing-animation) not found.")}})

const sections=document.querySelectorAll('.section-animate');
if('IntersectionObserver'in window){
  const ob=new IntersectionObserver((ents,obs)=>{ents.forEach(en=>{if(en.isIntersecting){en.target.classList.add('visible');obs.unobserve(en.target)}})},{threshold:.15});
  sections.forEach(s=>ob.observe(s));
}else{sections.forEach(s=>s.classList.add('visible'))}
