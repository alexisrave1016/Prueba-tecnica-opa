const miClick=()=>{
    const numeroImportado= document.querySelector(".input").value;
            document.querySelector(".resultado").innerHTML=numeroImportado; 
            const numero=numeroImportado;
            console.log('prueba'+' '+numero)
            console.log(typeof numero)
            console.log(numero.length)
            if(numero.length == 0){
                document.querySelector('.resultado').innerHTML=('Ingrese número');
            }
            if(numero <=0){
                document.querySelector('.resultado').innerHTML=('El número ingresado debe de ser positivo');
            }
            
            else{
            
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
            }  }

    }
    
const borrar=()=>{
    const borrarInput= document.querySelector('.input').value='';
        document.querySelector('.resultado').innerHTML=''
}    




