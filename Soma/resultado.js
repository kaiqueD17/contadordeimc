const btn = document.getElementById('btn-resultado');
 
resultado.addEventListener("click", function soma(){
    const peso = parseInt(document.getElementById("input-peso").value);
    const altura = parseInt(document.getElementById("input-altura").value);



    let resultado = document.getElementById("resultado");


    total.textContent = peso/(altura*altura);

});