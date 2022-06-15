const openNav = $('#open-nav');
const closeNav = $('#close-nav');
const openMode = $('#open-nav-mode');
const nav = $('nav');
const deleteBox = $('#container-delete');
const deleteButton = $("#delete-button");
const cancelButton = $("#cancel-button");
const prevBox = $('#container-prev');
const closePrev = $('#x-prev');

nav.hide();

deleteBox.hide();
prevBox.hide();

$('#prever').on("click", function(){
    event.preventDefault();
    openMode.fadeIn();
    prevBox.fadeIn();
});

closePrev.on("click", function(){
    openMode.fadeOut();
    prevBox.fadeOut();
});

openNav.on("click", function(){
    nav.animate({
        width:'toggle'
    }, 500);

    $('nav ul li').fadeIn(1300);

    openMode.fadeIn();
});

closeNav.on("click", function(){
    nav.animate({
        width:'toggle'
    }, 500);

    $('nav ul li').fadeOut(100);

    openMode.fadeOut();
});

openMode.on("click", function(){
    nav.animate({
        width:'toggle'
    }, 500);

    $('nav ul li').fadeOut(100);

    openMode.fadeOut();
});

$('.delete').on("click", function(){
    openMode.fadeIn();
    deleteBox.fadeIn();
});

deleteButton.on("click", function(){
    openMode.fadeOut();
    deleteBox.fadeOut();
});

cancelButton.on("click", function(){
    openMode.fadeOut();
    deleteBox.fadeOut();
});



const iconExpand = $('.icon-expand span');

iconExpand.on("click", function(){
    let id = $(this).attr('value');
    $('.content-card-' + id).animate(
        {
            height:'toggle'
        },500
    );
});

var requestURL = 'http://localhost/Sistema-RU---Front-end/js/darkMode.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function(){
    const darkMode = request.response;
    console.log(darkMode)

    if(darkMode["darkMode"] == false){

    }
}



const darkModeButton = $('.dark-mode-button');
const darkModeSpace = $('.dark-mode-space');

darkModeSpace.on("click", ativaDarkMode);



function ativaDarkMode(){
    darkModeButton.toggleClass('dark-mode-on');  
    $('.light-mode-icon').toggleClass('light-mode-on-icon')
    $('.dark-mode-icon').toggleClass('off-dark-icon')
    $('body').toggleClass('dark-mode')
    $('.dark-mode-icon').toggleClass("fa-sun");
    $('.dark-mode-icon').toggleClass("fa-moon")

    // request.onload = function(){
    //     const darkMode = request.response;
    //     console.log(darkMode)
        

    // }
}

// request.onload = function(){
//     const darkMode = request.response
//     if(darkMode["darkMode"] == false && $('.dark-mode-on') == true){
//         console.log("..");
//         darkMode.darkMode = true;
//     }
    
//     if (darkMode["darkMode"] == true){
//         darkModeButton.addClass('dark-mode-on');  
//         $('.light-mode-icon').toggleClass('light-mode-on-icon')
//         $('.dark-mode-icon').toggleClass('off-dark-icon')
//         $('body').toggleClass('dark-mode')
//     }

//     console.log(darkMode)
// }
