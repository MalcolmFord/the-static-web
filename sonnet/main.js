var sSonnet = document.getElementById('sonnet').innerText;

function myIndex(){
    var index = sSonnet.indexOf("orphans");
    console.log(index);
    var length = sSonnet.length;
    console.log (length);
    var winSwitch = sSonnet.replace("winter", "yuletide").replace(/ the /gi, " a large ");
    document.getElementById('sonnet').innerHTML = winSwitch;
}

myIndex();
