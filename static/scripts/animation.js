//Aqui estamos mudando o estado padrão para light 
// pegando os elementos e atribuindo a constantes
 var content = document.getElementsByTagName('header')[0]
 var contentbody = document.getElementsByTagName('body')[0]
 var mode = document.getElementById('change')
 
 //definindo objeto referente as cores nos dois estados
 const COLORS = {
   light:{
      text:' rgb(31, 30, 30)',
      header:'#959698',
      background: '#797d85',

   },

   dark:{
      text:'#EDF1F7',
      header:'#3a3e47',
      background: 'linear-gradient(180deg, #272A31 0%, #0A0C10 100%)'
   }
   }
   //salvando no local storage a cor atual 
 const setColorMode = (colorMode) =>{
   const root = document.documentElement;
   root.style.setProperty ('--color-background', colorMode === 'light' ? `${COLORS.light.background}` : `${COLORS.dark.background}`)
   root.style.setProperty ('--color-header', colorMode === 'light' ? `${COLORS.light.header}` : `${COLORS.dark.header}`)
   root.style.setProperty ('--color-text', colorMode === 'light' ? `${COLORS.light.text}` : `${COLORS.dark.text}`)
   localStorage.setItem("colorMode", colorMode)  
 }
  // desabilitando o white e colocando dark
 const disableWhiteMode = ()=>{
    setColorMode('dark')

 }
 
 // permanecer com as cores após o reload
 window.addEventListener('load',()=>{
   let colorMode = localStorage.getItem("colorMode")
   setColorMode(colorMode)
});

// revertendo a cor  
 mode.addEventListener('click', ()=>{
   let colorMode = localStorage.getItem("colorMode")
   colorMode = colorMode === 'light' ? 'dark' : 'light'
   setColorMode(colorMode)
        mode.classList.toggle('active');
 })

 
         
        
        
     
 
    
   
 


 
 