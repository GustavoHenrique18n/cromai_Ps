 //pegando valores do input e atribuindo a constantes
 const adjacente= document.getElementById("adjacente")//a
 const oposto= document.getElementById("oposto")//b
 const hipotenusa= document.getElementById("hipotenusa")//c 
 

  
 
//calculos necessarios para a aplicação

    function calc(){
     if(adjacente.value && oposto.value && hipotenusa.value){
           
        Swal.fire({
            title: "oopss!",
            icon:"warning",
            text:"Digite apenas 2 lados"
        })
     }
        else if(adjacente.value && oposto.value){
          document.getElementById("resultarea").style.display="block"
           
          const result = (Math.pow(adjacente.value,2) + Math.pow(oposto.value,2))/2

             document.getElementById("resultarea").innerHTML=
              "<h3>valor da hipotenusa</h3><h3>c = √a² + b²</h3> " + result
             
              

        }else if (oposto.value && hipotenusa.value){

            document.getElementById("resultarea").style.display="block"

             const result =  (Math.pow(hipotenusa.value,2) - Math.pow(oposto.value,2))/2

             document.getElementById("resultarea").innerHTML=

              "<h3>valor lado adjacente</h3><h3>a = √ c² - b²</h3>  " + result
             
        }else if (adjacente.value && hipotenusa.value){
            
            document.getElementById("resultarea").style.display="block"

            const result = (Math.pow(hipotenusa.value,2) - Math.pow(adjacente.value,2))/2

            document.getElementById("resultarea").innerHTML = 

            "<h3>valor lado oposto</h3><h3>b = √ c² - a²</h3>  " + result
        }
        else{
            Swal.fire({
                title: "oopss!",
                icon:"error",
                text:"Digite 2 lados para relacionar"
            })
        }

         
          
     }

 
 


