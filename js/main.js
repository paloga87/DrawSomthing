$(document).ready(function(){
  $('.container').hide().fadeIn(2500);
})
$('.btn-primary').on('touchstart click', capture());

var letters;
var arrayOfIdx = [];
//Funcion Anagramas
function capture(){
  letters = document.getElementById("letters").value.split("").sort();  
  // Recorre las palabras del diccionario
  for (var i = 0; i < dictionary.length;  i++){   
    // Recorre las letras de las palabras del diccionario
    console.log(dictionary[i]);
    for (var j = 0; j < dictionary[i].length;  j++){
      // Quita las tildes
      var noAccent = removeAccent(dictionary[i][j]);
      //console.log('letra: ' + noAccent);
      // Verifica que las letras coincidan
      var idx = letters.indexOf(noAccent);
      // Filtra las que no coinciden
      if (idx !== -1) {
        if (arrayOfIdx == '' ) {
          arrayOfIdx.push(idx);          
        }else{
          var secIdx = arrayOfIdx.indexOf(idx);
          
          if (secIdx === -1) {
            arrayOfIdx.push(idx);
          }else{
            j = dictionary[i].length + 1;
            arrayOfIdx = [];
          }
        }
        console.log(noAccent);
        // Filtra las plabras que cumplen con todas las letras
        if (j == dictionary[i].length - 1) {
          var words = document.getElementById('words');
          // las incluye en el HTML
          var newWord = document.createElement('li');
          newWord.textContent = dictionary[i];
          words.appendChild(newWord);
        }
      }else{
        j = dictionary[i].length + 1;
        arrayOfIdx = [];
      }   
    }

  } 
}

//Sustituye "á é í ó ú" 
function removeAccent(str){ 
for (var i=0;i<str.length;i++){ 
if (str.charAt(i)=="á") str = str.replace(/á/,"a"); 
if (str.charAt(i)=="é") str = str.replace(/é/,"e"); 
if (str.charAt(i)=="í") str = str.replace(/í/,"i"); 
if (str.charAt(i)=="ó") str = str.replace(/ó/,"o"); 
if (str.charAt(i)=="ú") str = str.replace(/ú/,"u"); 
} 
return str; 
} 

