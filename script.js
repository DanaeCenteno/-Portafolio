let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Elia Danae Centeno Méndez')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora FRONTEND JR')
  .pauseFor(1000)
  .start();

  async function copiarAlPortapapeles(texto) {
    try{
        await navigator.clipboard.writeText(texto);
        alert('Texto Copiado al Portapapeles')
    }catch(err){
        console.error('Error al copiar: ', err);
    }
    
  }