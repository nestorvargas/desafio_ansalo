//variables definidas

var btn = document.getElementsByClassName('btnNumLet');
var outputNumber = document.getElementById('output1');
var outputLetter = document.getElementById('output2');
var outputMensaje = document.getElementById('mensaje');


// click id para limpiar
document.getElementById("clear").addEventListener('click', ()=>{
    outputNumber.innerHTML=''
    outputLetter.innerHTML=''
})

//funcionalidad para mostrar las letras y numeros
var buttons = (e)=>{

    //variables de botones
    //contenido de boton
    var btntxt = e.target.innerText
    //id de boton
    var btnid = e.target.id

    //console.log(btnid);
    //desacoplar arreglo o vector en posicion 0 y 1
    var number = btntxt[1]
    var letter = btntxt[0]

    //declarar variables numeros y letras
    var num = outputNumber.innerText;
    var lett = outputLetter.innerText

    // declarar array o arreglo de Letras
    let letterArray = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

    //if de validaciones para numeros
    if(num === ''){
        if(number === '1'){
            //if es 1 lo agrega al id output1
            outputNumber.innerHTML= number

        }else{
            outputMensaje.innerHTML='Empieza por el número 1';
            $('#Modal').modal('show');
        }
    }else{
        if (num !== '') {
            if(number === '0' && num[num.length -1] === '9'){
                outputNumber.innerHTML= num + ' - ' + number
            }else{
                if(num[num.length -1] === '0' && lett ==='' && letter !== 'A'){
                    outputMensaje.innerHTML='Empieza por la letra A';
                    $('#Modal').modal('show');
                }else if(number-1 > num[num.length -1] && lett ==='' ){
                    outputMensaje.innerHTML='No es el número que sigue';
                    $('#Modal').modal('show');
                }else if(number <= num[num.length -1] && lett ===''){
                    outputMensaje.innerHTML='No es el número que sigue';
                    $('#Modal').modal('show');

                }else{
                    outputNumber.innerHTML= num + ' - ' + number
                }
            }
        }
    }


    if(num[num.length-1] === '0' && lett===''){
        if(letter === 'A'){
            outputLetter.innerHTML= letter
            outputNumber.innerHTML= num
        }
    }else{
        if (lett !== '') {
            if(letter === 'J' && lett[lett.length -1] === 'I'){
                outputLetter.innerHTML= lett + ' - ' + letter
                outputNumber.innerHTML= num
            }else{
                if( letterArray.indexOf(letter)-1 > letterArray.indexOf(lett[lett.length -1])){
                    outputNumber.innerHTML= num
                    outputMensaje.innerHTML='No es la letra que sigue ';
                    $('#Modal').modal('show');
                }else if(letter <= lett[lett.length -1]){
                    outputNumber.innerHTML= num
                    outputMensaje.innerHTML='No es la letra que sigue ';
                    $('#Modal').modal('show');
                }else{
                    outputLetter.innerHTML= lett + ' - ' + letter
                    outputNumber.innerHTML= num;
                }
            }
        }
    }


}

for(let i=0; i < btn.length; i += 1){
    btn[i].addEventListener('click', buttons)
}