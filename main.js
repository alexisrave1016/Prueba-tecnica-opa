const miClick=()=>{
    const numeroImportado= document.querySelector(".input").value;
            document.querySelector(".resultado").innerHTML=numeroImportado; 
            const numero=parseInt(numeroImportado)
            
           
            // if(numero==''){
            //     document.querySelector('.prueba').innerHTML=('Ingrese número');
            // }
            // if(numero <= 0){
            //     document.querySelector('.prueba').innerHTML=('El número ingresado debe de ser positivo');
            // }
            // if(typeof numero=='number'){document.querySelector(".prueba").innerHTML=numero;
            // }

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
    
const borrar=()=>{
    const borrarInput= document.querySelector('.input').value='';
        document.querySelector('.resultado').innerHTML=''
}    




