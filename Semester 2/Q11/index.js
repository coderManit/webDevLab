const btn = document.querySelector(".calculate");

btn.addEventListener('click', ()=>{
    const wt = parseFloat(document.querySelector('.wt').value);
    const ht = parseFloat(document.querySelector('.ht').value);
    
    const res = wt / (ht*ht);
    
    document.querySelector('.res').value = res;
});