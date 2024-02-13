document.addEventListener('DOMContentLoaded',function(){
const readMore=document.querySelectorAll('.read-more');
readMore.forEach(function(btn){
    btn.addEventListener('click',function(){
        const target=btn.getAttribute('data-target');
        const paragraph=document.querySelector(`.${target} .blogs-paragraph`);

        paragraph.style.display=(paragraph.style.display==='none' || paragraph.style.display==='')? 'block':'none';
        btn.innerText=(paragraph.style.display==='none')? 'Read More' : 'Read Less';
    });  
})
});
