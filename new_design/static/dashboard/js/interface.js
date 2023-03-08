let window_width = window.innerWidth;


$(document).ready(function () {
    if(window_width < 768){
        $('.sidebar').addClass('hide');
    }

    $(window).on('resize', function() {
        if($(this).innerWidth() < 768 ){
            $('.sidebar').addClass('hide');
        }else{
            $('.sidebar').removeClass('hide');
        }
    })

    const elemtooltips = document.querySelectorAll('.btn-tooltip')
    for(let elem of elemtooltips){
        new bootstrap.Tooltip(elem)
    }
});

function toggleSidebar() {
    $('.sidebar').toggleClass('hide');
    $('.backdrop').toggleClass('d-none');
}
function toggleMode(self){
    let value = $(self).data('light');
    $('body').toggleClass('dark');

    if(value){
        $(self).html('<i class="fa-solid fa-sun"></i>')
    }else{
        $(self).html('<i class="fa-solid fa-moon"></i>')
    }

    $(self).data('light',!value);

}