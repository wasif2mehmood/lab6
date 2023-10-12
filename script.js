var mem=0;

function btn(val) {
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function btn_clr() {
    document.getElementById("screen").value="";
}
function btn_equal() {
    try{
    document.getElementById("screen").value=eval(document.getElementById("screen").value);
    }
    catch(err){
        document.getElementById("screen").value="Error";
    }
}
function btn_sqr() {
    try{
    document.getElementById("screen").value=Math.pow(document.getElementById("screen").value,2);
    }
    catch(err){
        document.getElementById("screen").value="Error";
    }
}
function btn_sqrt() {
    try{
    document.getElementById("screen").value=Math.sqrt(document.getElementById("screen").value);
    }
    catch(err){
        document.getElementById("screen").value="Error";
    }
}
function btn_rec() {
    try{
    document.getElementById("screen").value=1/document.getElementById("screen").value;
    }
    catch(err){
        document.getElementById("screen").value="Error";
    }
}
function btn_MS(){
    try{
    mem=eval(document.getElementById("screen").value);
    document.getElementById("screen").value="";
    }
    catch(err){
        document.getElementById("screen").value="Error";
    }
}
function btn_MR(){
    document.getElementById("screen").value=mem;
}
function btn_MC(){
    mem=0;
    document.getElementById("screen").value="";
}
function btn_Mplus(){
    try{
    mem+=eval(document.getElementById("screen").value);
    document.getElementById("screen").value=mem;
    }
    catch(err){
        document.getElementById("screen").value="Error";
    }
}
function btn_plusminus(){
    try{
    document.getElementById("screen").value=-document.getElementById("screen").value;
    }
    catch(err){
        document.getElementById("screen").value="Error";
    }
}