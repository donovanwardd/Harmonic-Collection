
let button = document.querySelector('#example');

button.onclick = () => {
	alert('"I have moments where I miss my old self. But I think anyone can get caught up in what we used to have. But at the same time, we can choose to focus on the beauty of now." -Steve Gleason');
};

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }


}