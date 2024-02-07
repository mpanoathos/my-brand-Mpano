const hamburger=document.querySelector('#hamburger-menu');
const navigation=document.querySelector('nav')
const body=document.querySelector('body')
hamburger.addEventListener('click',function(){
    navigation.style.display='flex';
})
body.addEventListener('click',function(event){
    if(!navigation.contains(event.target) && event.target !== hamburger){
        navigation.style.display='none';
    }
})