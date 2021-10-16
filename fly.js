var eevee=localStorage.getItem("User");

document.getElementById("name").innerHTML = "Welcome " + eevee + "!";



function flu()
{
    var f = "<h4>A common viral infection that can be deadly, especially in high-risk groups. The flu attacks the lungs, nose and throat. Young children, older adults, pregnant women and people with chronic disease or weak immune systems are at high risk. Symptoms include fever, chills, muscle aches, and coughinfg. Taking an anual vaccine will help the symptoms slow down. </h4>";
    var l = "<img src='download.jfif' width='100px' height='100px'>";
    var u = f+l;
    document.getElementById("flu").innerHTML = u;
}
function Ringworms(){
    var r = "<h4>A highly contagious fungal infection of the skin or scalp. The fungail virus can cause a red circular spot on the body which is very itchy. Treatment is to use anti fungul spray.";
    var i = "<img src='jo.jfif' width='100px' height='100px'>";
    var n = r+i;
    document.getElementById("Ringworms").innerHTML = n;
}
function Peest(){
    var y = "<h4>A yeast infection of the vagina and tissues at the opening of the vagina (vulva). This type of yeast infection is caused by the fungus candida. Antifungul cream or antifungul medicine will stop the infection. If the infectuion  has become worse, more complex treat ment is required. </h4>";
    var e = "<img src='yeast.jpg' width='100px' height='100px'>";
    var a = y+e;
    document.getElementById("peest").innerHTML = a;
}
function logout(){
    localStorage.removeItem("User");
    window.location="index.html";
}