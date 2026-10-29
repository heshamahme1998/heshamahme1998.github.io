const contiener1=document.getElementById('ant1');
const contiener2=document.getElementById('asr1');
window.addEventListener('scroll' , () => {
    if (window.scrollY > 15) {
        contiener1.style.display = 'none';
        contiener2.style.top = '0';

    }
    else {
        contiener1.style.display = '';    
        contiener2.style.top = '';
    }
});
