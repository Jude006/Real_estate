let menu = document.getElementById("menu")
let menuicon = document.getElementById("menu-icon")



// menuicon.onclick = function(){
//     menu.classList.remove('hidden')
// }
  
// menuicon.onclick = function(){
//     menu.classList.add('hidden')
// }

const landing = document.getElementById('landing');

menuicon.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  if (!menu.classList.contains('hidden')) {
    landing.style.marginTop = menu.offsetHeight + 'px';
  } else {
    landing.style.marginTop = '100';
  }
});

 document.addEventListener('DOMContentLoaded', () => {
      const slideInBox = document.getElementById('slide-in-box');
      slideInBox.classList.remove('slide-in-hidden');
      slideInBox.classList.add('slide-in-visible');
    });

    AOS.init();

    document.addEventListener('scroll', ()=> {
        const header = document.querySelector('header');
        if (window.scrollY > 10)
        {
            header.classList.add('scrolled');
            

        } else{
            header.classList.remove('scrolled');
        }
     
       
    } )

    const properties = [
        { id: 1, name: 'Property 1', price: '$12,0000', bedrooms: 3 },
        { id: 2, name: 'Property 2', price: '$750,000', bedrooms: 4 },
        // Add more properties here
      ];
  
      function searchProperties() {
        const query = document.getElementById('searchInput').value.toLowerCase();
        const filteredProperty = properties.find(property => 
          property.name.toLowerCase().includes(query) || 
          property.price.toLowerCase().includes(query) || 
          property.bedrooms.toString().includes(query)
        );
  
        if (filteredProperty) {
          const element = document.getElementById(`property-${filteredProperty.id}`);
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          highlightElement(element);
        }
      }
  
      function highlightElement(element) {
        element.classList.add('highlight');
        setTimeout(() => {
          element.classList.remove('highlight');
        }, 2000);
      }


     
      const backgrounds = document.querySelectorAll('.background');
      let currentIndex = 0;

      function switchBackground() {
          backgrounds[currentIndex].classList.remove('active');
          currentIndex = (currentIndex + 1) % backgrounds.length;
          backgrounds[currentIndex].classList.add('active');
      }

      setInterval(switchBackground, 5000); // Switch background every 5 seconds

      

      