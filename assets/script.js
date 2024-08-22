function criptografar(){
    configExibeTexto();
    let texto = document.querySelector('textarea').value;
    let texto_criptografado = texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
    document.querySelector(".principal__exibe-texto__texto").innerHTML = texto_criptografado;
}

function descriptografar(){
    configExibeTexto();
    let texto = document.querySelector('textarea').value;
    let texto_descriptografado = texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    document.querySelector(".principal__exibe-texto__texto").innerHTML = texto_descriptografado;
}

function copiar(){
    let texto_copiado = document.querySelector('.principal__exibe-texto__texto');
    texto_copiado.select();
    document.execCommand('copy');
    alert('texto copiado');
}

function configExibeTexto(){
    document.getElementById('img__exibe-texto').style.display = "none";
    document.getElementById('no-msg__exibe-texto').style.display = "none";
    document.getElementById('texto__exibe-texto').style.display = "block";
    document.getElementById('copiar').style.display = "block";
    document.querySelector('.principal__exibe-texto').classList.add('principal__exibe-texto__troca');
}
