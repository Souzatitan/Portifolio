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
        const buttons = document.querySelectorAll('.action'); 

        buttons.forEach(button => {
        button.addEventListener('click', () => {

    
        button.classList.add('active');
  });
});


   
const contactButton = document.querySelector('.action');
const contentDiv = document.querySelector('.content');


contactButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    contentDiv.classList.toggle('active'); 
});


document.addEventListener('click', (e) => {
   
    if (!contentDiv.contains(e.target) && !contactButton.contains(e.target)) {
        contentDiv.classList.remove('active'); 
    }
});
