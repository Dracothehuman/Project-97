function newpage()
{
    var bebe = document.getElementById("sug").value;
    localStorage.setItem("User", bebe);
    console.log(bebe)
    
    window.location="disease.html";
}
