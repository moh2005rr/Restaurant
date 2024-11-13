
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}


document.querySelector('.fa-user').onclick = () => {

    document.querySelector('#login-form').classList.toggle('active');

}
document.querySelector('#close2').onclick = () => {
    document.querySelector('#login-form').classList.remove('active');
}


let btn = document.getElementById('btn');
onscroll = function () {
    if (scrollY >= 400) {
        btn.style.display = 'block';
    }
    else {
        btn.style.display = 'none';
    }
}
btn.onclick = function () {
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
}



