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

const darkModeButton = $('.dark-mode-button');

darkModeButton.on("click", function(){
    darkModeButton.toggleClass('dark-mode-on');  
    $('.light-mode-icon').toggleClass('light-mode-on-icon')
    $('.dark-mode-icon').toggleClass('off-dark-icon')
});