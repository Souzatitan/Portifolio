var togglebtn = document.querySelector(".togglebtn");
        var nav = document.querySelector(".navlinks");
        var links = document.querySelectorAll(".navlinks li");
    
        
        togglebtn.addEventListener("click", (e) => {
            e.stopPropagation(); 
            togglebtn.classList.toggle("click");
            nav.classList.toggle("open");
        });
    
        
        document.addEventListener('click', () => {
            nav.classList.remove('open');
            togglebtn.classList.remove("click");
        });
    
       
        var typed = new Typed(".input", {
            strings: ["Frontend Developer", "UX Designer", "Web Developer"],
            typeSpeed: 70,
            backSpeed: 55,
            loop: true
        });
        const buttons = document.querySelectorAll('.action'); // Seleciona todos os botões com a classe 'btn'

        buttons.forEach(button => {
        button.addEventListener('click', () => {

    
        button.classList.add('active');
  });
});


   
const contactButton = document.querySelector('.action');
const contentDiv = document.querySelector('.content');

// Adiciona o evento de clique no botão "Contato"
contactButton.addEventListener('click', (e) => {
    e.preventDefault(); // Evita o comportamento padrão do link
    contentDiv.classList.toggle('active'); // Adiciona ou remove a classe 'active' na div 'content'
});