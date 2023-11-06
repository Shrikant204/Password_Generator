const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let Pass1="",Pass2=""
function generate(){
 Pass1="",Pass2=""
  for(let i=1;i<=15;i++){
      Pass1+=characters[Math.floor(Math.random()*characters.length)];
      Pass2+=characters[Math.floor(Math.random()*characters.length)];
      
}
    document.getElementById("pass1").value=Pass1
    document.getElementById("pass2").value=Pass2
}



