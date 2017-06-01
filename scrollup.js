document.getElementById('scrollup').addEventListener('click',function () {
    var timerId = setInterval(scrollToTop,1);
    function scrollToTop() {
        var pos = window.pageYOffset;
        if (pos == 0 ){
            clearInterval(timerId);
        } else {
            window.scroll(0,pos - 30 );
        }
    }
});
window.onscroll = function () {
    if(window.pageYOffset > 15){
        document.getElementById('scrollup').style.display = "flex";
    }
    if(window.pageYOffset == 0){
        document.getElementById('scrollup').style.display = "none";
    }
}