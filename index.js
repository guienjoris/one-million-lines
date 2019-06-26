function backToTop(){
    window.scrollTo(0,0);
}
var menuHidden= document.getElementById("hide_menu");
var hideMenu= document.getElementsByClassName("menu");
function menu(){
    menuHidden.setAttribute("onclick","closeMenu()")
    hideMenu[0].style.display= "block";
    hideMenu[1].style.display= "block";


}
function closeMenu(){
    menuHidden.setAttribute("onclick","menu()");
    hideMenu[0].style.display= "none";
    hideMenu[1].style.display= "none";

}