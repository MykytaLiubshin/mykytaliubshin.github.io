const ids = [
    "nav_one",
    "nav_two"
]
var myStorage = window.localStorage;
const get_email = () => localStorage.getItem("email") == "undefined" || 
localStorage.getItem("email") == null ? "" : localStorage.getItem("email")
if (localStorage.getItem("email") == "undefined")
{
    localStorage.setItem("email", "")
}
const your_email = () => {
    if (localStorage.getItem("email") == "undefined" || localStorage.getItem("email") == "" )
    {
        document.getElementById("your_email").innerHTML = ``;
    }
    else
    {
        document.getElementById("your_email").innerHTML = `<p class="c2 email_text">Your email is ${localStorage.getItem("email")}</p>`;
    }
}
your_email()
const get_navbar = ( active ) => `
<nav id="navbar_rock" class="navbar navbar_rock ${ active==1 ? "leftie" : "rightie" }">
      <nav class="nav nav-pills flex-column">
        <a class="nav-link ${ active==1 ? "activ"  : "" }" href="#top">1</a>
        <a class="nav-link " href="#about_us">2</a>
        <a class="nav-link ${ active==3 ? "activ"  : "" }" href="#our_new_vid">3</a>
        <a class="nav-link " href="#bottom">4</a>
      </nav>
    </nav>
` 

const set_nav = (active, id) => {
    try{document.querySelector('#'+id).innerHTML = get_navbar(active+1);}catch(error) {}
}

const show = () => 
{
    document.getElementById("overlapper-hider").style = "";
}


const submForm = () =>
{
    var x = document.getElementById("overlapper-form");
    x = Array.from(x.elements).map(el => el.value).filter( el => el !== "");
    console.log(x);
    localStorage.setItem("email", x[0]);
    document.getElementById("overlapper-hider").style = "display: none;";
    your_email();
    set_local_input();
}

const drop = () => document.getElementById("overlapper").style="display: none;";

const set_local_input = () => {
    console.log("DONE");
    document.getElementById("inputter").value = get_email();
}

set_nav( 0, ids[0] )
set_nav( 2, ids[1] )
set_local_input()
