$(document).ready(function() {
    // When the user scrolls the page, execute myFunction
    var largeur_move = $("#blog-slider").width() ;
    var largeur_moveBefore = $("#blog-slider").width() ;
    window.onscroll = function() {myFunction()};
    window.onresize = function() {
        if(window.innerWidth >= 992) {
            $("#accordion").hide() ;
            $("#accordion").addClass("d-none")
            $("#bars").addClass("fa-bars") ;
            $("#bars").removeClass("fa-times") ;
            $("#bars").attr("state","off")
        }
        largeur_move = $("#blog-slider").width() ;
        largeur_moveBefore = $("#blog-slider").width() ;
        
    }

    // Get the navbar
    var navbar = document.getElementById("navigation");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    }

    /* Region and departement selection */
    $(".region").each(function() {
        $(this).on({
            mouseenter: function() {
                var data = $(this).data('code_insee') ;
                var id = 'region-'+data ;
                $("#"+id).addClass("link-activated") ;
                
            },
            mouseleave: function() {
                var data = $(this).data('code_insee') ;
                var id = 'region-'+data ;
                $("#"+id).removeClass("link-activated") ;
                
            }
        })
    })


    /* Random number */
    function random(nbre) {
        return Math.floor(Math.random() * nbre | 0 || -1) ;
    }

    /* Card rotation */
    $(".card-rotate").each(function() {
        $(this).css({
            "transform": "rotate("+random(5)+"deg)" ,
        })
    })


    var stateIcon ;
    var stateTxt ;
    var elmentToChange = [] ;
    var initialConfig = 0 ;
    var anim ;
    var usedMenu = "" ;
    var usedIconName = "" ;
    var newIcon = "" ;
    var oldElementChanged ;
    var usedClassName = "" ;

    $(".icon-menu").each(function() {
        $(this).on({
            mouseenter: function() {
                var menuHovered = $(this).attr("id") ;
                if(usedMenu != menuHovered && initialConfig > 0) {
                    oldElementChanged[0].attributes[0].nodeValue = usedIconName ;
                    oldElementChanged[1].attributes["class"].nodeValue = usedClassName ;
                    oldElementChanged.parent().css({
                        "border-bottom": "none" ,
                    })
                }
                clearTimeout(anim)
                var d = $(this).attr("data-shower") ;
                $('.boite-menu').css({
                    "display":"none"
                })
                $("#boite-"+d).css({
                    "display":"flex" ,
                })
                stateIcon = ""
                stateTxt = ""
                elmentToChange = $(this).children() ;
                oldElementChanged = $(this).children() ;
                var icon = $(this).children()[0].attributes[0].nodeValue ;
                stateIcon = icon ;
                usedIconName = icon ;
                var dataIcon = icon.split('.') ;
                newIcon = dataIcon[0]+"-colored"+".png" ;
                $(this).children()[0].attributes[0].nodeValue = newIcon ;
                stateTxt = $(this).children()[1].attributes["class"].nodeValue ;
                usedClassName = $(this).children()[1].attributes["class"].nodeValue ;
                $(this).children()[1].attributes["class"].nodeValue += " text-and-icon" ;
                initialConfig++ ;
                $(this).css({
                    "border-bottom": "1px solid #8de8fe" ,
                })
            },
            mouseleave: function(a) {
                var d = $(this).attr("data-shower") ;
                anim = setTimeout(function() {
                    $("#boite-"+d).css({
                        "display":"none" ,
                    })
                    // console.log()
                    elmentToChange.parent().css({
                        "border-bottom": "none" ,
                    })
                    elmentToChange[0].attributes[0].nodeValue = stateIcon ;
                    elmentToChange[1].attributes["class"].nodeValue = stateTxt ;
                    stateIcon = "" ;
                    stateTxt = "" ;
                    elmentToChange = [] ;  
                },5) ;
                $("#boite-"+d).on({
                    mouseenter: function(c) {
                        c.stopImmediatePropagation()
                        clearTimeout(anim) ;
                    },
                    mouseleave: function(d) {
                        d.stopImmediatePropagation()
                        clearTimeout(anim) ;
                        $(this).css({
                            "display":"none" ,
                        })
                        
                        elmentToChange[0].attributes[0].nodeValue = stateIcon ;
                        elmentToChange[1].attributes["class"].nodeValue = stateTxt ;
                        elmentToChange.parent().css({
                            "border-bottom": "none" ,
                        })
                        stateIcon = "" ;
                        stateTxt = "" ;
                        elmentToChange = [] ;   
                    }
                }) 
            }
        })
    })






    /* Flag link */
    $(".icon-flag-menu").each(function() {
        $(this).click(function() {
            var src = $(this).children()[0].attributes[0].nodeValue ;
            $("#flag-show").attr("src",src) ;
        })
    })


    /**
     * 
     *  Bars responsive
     * 
     */
    $("#accordion").hide() ;
    $("#bars").click(function() {
        $("#accordion").removeClass("d-none")
        $("#accordion").slideToggle(200)
        if($(this).attr("state") == "off") {
            $(this).removeClass("fa-bars") ;
            $(this).addClass("fa-times") ; 
            $(this).attr("state","on")   
        }
        else {
            $(this).addClass("fa-bars") ;
            $(this).removeClass("fa-times") ;
            $(this).attr("state","off")
        }
    })


    // Dropdown
    // $(".dropper").slideUp() ;
    // $(".nav-link").each(function() {
    //     $(this).click(function(e) {
    //         e.stopPropagation() ;
    //         $('.dropper').slideUp() ;
    //         $(this).next().slideDown() ;
    //     })
    // })

    var polaroidNumber = $("#blog-slider .card-polaroid") ;
    var largeur = polaroidNumber.length * 265 ;
    // var largeur_initial = 795 ;
    var mikisaka = 0 ;
    $("#right").click(function() {
        largeur_move += 40 ;
        // largeur_initial += 40 ;
        mikisaka += 40 ;
        if(largeur_move >= largeur) {
            $("#right").css({
                "display": "none" ,
            })
            $("#left").css({
                "display": "block" ,
            })
        }
        else {
            $(".card-polaroid").css({
                "right": mikisaka+"px" ,
            })
        }
        
    })

    $("#left").click(function() {
        largeur_move -= 40 ;
        // largeur_initial += 40 ;
        mikisaka -= 40 ;
        if(largeur_move == largeur_moveBefore) {
            $("#right").css({
                "display": "block" ,
            })
            $("#left").css({
                "display": "none" ,
            })
        }
        else {
            $(".card-polaroid").css({
                "right": mikisaka+"px" ,
            })
        }
        
    })
    
})