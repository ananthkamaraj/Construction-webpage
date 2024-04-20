var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos==0) {
        document.getElementById("header").style.boxShadow = "0px 0px 0px 0px";
    }

    else{
        document.getElementById("header").style.boxShadow = "0px 5px 12px #E4E3E3";
    }
}