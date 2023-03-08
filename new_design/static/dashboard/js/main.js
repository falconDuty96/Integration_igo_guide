$(document).ready(function () {
    $(".sc-selector").removeClass("d-none")
    $(".sc-selector").addClass("d-none")
    $("#categ-1").removeClass("d-none")
    $("#selector-categ").val("categ-1")

    $("#selector-categ").change(function() {
        var value = $(this).val() ;
        $(".sc-selector").removeClass("d-none")
        $(".sc-selector").addClass("d-none")
        $("#"+value).removeClass("d-none")
    })

    $("#hover-clicked").click(function() {
        $("#clickable").click() ;
    })
});

function togglePassword(elem){
    var input = $(elem).next("input");
    var show = $(elem).data("show");

    console.log(show);

    if(show){
        $(input).prop('type','text');
        $(elem).html('<i class="fa-regular fa-eye"></i>')
    }else{
        $(input).prop('type','password');
        $(elem).html('<i class="fa-regular fa-eye-slash"></i>')
    }
    $(elem).data("show",!show);
}

function browseFile(idInput) {
    $(idInput).click();
}

function previewIconCategorie(elem) {
    const file = elem.files[0];
    const preview = $("#categorie-icon-preview");
    $("#categorie-icon").val(file.name);
    loadImage(file, base64 => {
        $(preview).prop("src",base64);
        $(preview).parent().removeClass('d-none');
    })
}





function createFiche() {
    $("#open-modal-fiche").click();
}

function createAbonnement() {
    $("#open-modal-abonnement").click();
}
function createEmails() {
    $("#open-modal-emails").click();
}

function createNotifications() {
    $("#open-modal-notifications").click();
}

