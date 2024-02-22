$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menubtn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });
    var typed = new Typed(".typing", {
        strings: ["Freelancer" , "Designer","Gamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });
    let tn = document.getElementsByClassName('thumbnail')
    let activeImg = document.getElementsByClassName('active')

    for (var i=0; i < tn.length; i++){

        tn[i].addEventListener('mouseover', function(){
            console.log(activeImg)

            if(activeImg.length > 0){
            activeImg[0].classList.remove('active')
            }

            this.classList.add('active')
            document.getElementById('feature').src = this.src
        })
    }
    let btnRight = document.getElementById('right');
    let btnLeft = document.getElementById('left');

    btnLeft.addEventListener('click',function(){
        document.getElementById('slider').scrollLeft -= 180
    })
    btnRight.addEventListener('click', function(){
        document.getElementById('slider').scrollLeft += 180
    })
    
});

