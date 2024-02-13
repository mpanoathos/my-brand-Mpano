
//Downloading CV
document.querySelector('.cv').addEventListener('click',()=>{
    let link =document.createElement('a');
    link.href='./images/CV.pdf';
    link.target='_blank'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
