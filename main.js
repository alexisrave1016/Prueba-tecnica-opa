// const prueba=parseInt(document.getElementsByClassName('input').value);
// console.log('malparido hp'+ prueba)
const miClick=()=>{
    const numeroImportado= document.querySelector(".input").value;
            document.querySelector(".resultado").innerHTML=numeroImportado; 
            const numero=parseInt(numeroImportado)
           
            if(numeroImportado==''){
                document.querySelector('.resultado').innerHTML=('Ingrese número');
            }
            if(numero <= 0){
                document.querySelector('.resultado').innerHTML=('El número ingresado debe de ser positivo');
            }
            if(typeof numero=='string'){document.querySelector(".resultado").innerHTML=numero;
            }

            let suma= 0;
            for (let i = 1; i <=numero/2; ++i) {
                if(numero % i == 0){
                    suma += i;
                }
            }
            
            if(suma != 0 && suma== numero){
                document.querySelector('.resultado').innerHTML=(`El número ${numero} es perfecto`)
            }else{
                document.querySelector('.resultado').innerHTML=(`El número ${numero} NO es perfecto`)
            }  

    }
    
    




// aca estoy medio bien







// const numeroPerfecto=(numero)=>{

//     if(!Number.isInteger(numero)){
//         throw TypeError('El número ingresado debe de ser un entero');
//     }
//     if(numero <= 0){
//         console.log('El Numero ingresaso debe de ser un numero positivo');
//     }

//     let suma= 0;
//     for (let i = 1; i <= numero/2; ++i) {
//         if(numero % i == 0){
//             suma += i;
//         }
//     }

//     return suma != 0 && suma== numero;

// }



// try{console.log(numeroPerfecto(6))
// }catch(e){
//     console.log(`Error:`)
// }

// try{console.log(numeroPerfecto(28))
// }catch(e){
//     console.log(`Error:`)
// } 






