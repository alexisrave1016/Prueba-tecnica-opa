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
        return suma != 0 && suma== numero;       

    }

try{console.log(numero)
}catch(e){
    console.log(`Error:${e.message}`)
} 







//     const numeroImportado= document.querySelector(".input").value;
//             document.querySelector(".resultado").innerHTML=numeroImportado;  

//     return numeroImportado;       
// }



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



// try{console.log(numeroPerfecto(3))
// }catch(e){
//     console.log(`Error:${e.message}`)
// } 






