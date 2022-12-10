$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

var typed = new Typed(".typing",{
    strings:["Programação"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});



    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHovePauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});

function validar(){
    var nome = formulario.nome.value;
    var email = formulario.email.value;
    var fieldtextarea = formulario.fieldtextarea.value;

    if(nome == ""){
        alert('Nome');
        formulario.nome.focus();
        return false;
    }

    if(email == "" || email.indexOf('@') == -1){
        alert('Email');
        formulario.email.focus();
        return false;
    }

    if(text == "" || fieldtextarea.length <= 5){
        alert('Escrever');
        formulario.fieldtextarea.focus();
        return false;
    }
}