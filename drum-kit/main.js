const keys = Array.from(document.querySelectorAll('.key'));
 const keycode = {
    A:65,
    S:83,
    D:68,
    F:70,
    G:71,
    H:72,
    J:74,
    k:75,
    L:76,
 };

 function removetransition(e){
    if (e.propertyname!=='transform')
    return;
    e.target.classList.remove('playing')
 }