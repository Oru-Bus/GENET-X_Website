// ---------------------------------------------------------------------------------------------------------------------------------------
// fonction qui gère le menu déroulant sur la page avec les sections
function scrollToSection(sectionId) { 
    var section = document.getElementById(sectionId); 
    if (sectionId) { 
        var offset = 120; 
        var offsetTop = section.offsetTop - offset;
        window.scrollTo({ 
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------
// fonction qui gère le menu sur la page à gauche avec la barre de recherche

function menu() { 
    var input, filter, ul, li, a, i; 
    input = document.getElementById("recherche"); 
    filter = input.value.toUpperCase(); 
    ul = document.getElementById("menu"); 
    li = ul.getElementsByTagName("li"); 
    for (i = 0; i < li.length; i++) { 
      a = li[i].getElementsByTagName("a")[0]; 
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) { 
        li[i].style.display = ""; 
      } else {
        li[i].style.display = "none"; 
      }
    }

}

//---------------------------------------------------------------------------------------------------------------------------------------

// fonction qui gère la barre du menu déroulant en fonction du défilement de la page

var navOffset = null;

function barre_fixe() 
{
    var navBarreElement = document.getElementById('nav-barre-header'); // récupération de l'id de nav-barre-header
    var mySidenav = document.getElementById("mySidenav"); // récupération de l'id de mySidenav

    if (navBarreElement == null)
    {
        navBarreElement = document.getElementById('barre-nav'); // récupération de l'id de barre-nav
    }

    if (navOffset == null && navBarreElement) 
    {
        navOffset = navBarreElement.offsetpage || 1;
    }
    
    if (window.pageYOffset > navOffset + 5)
        { 
        navBarreElement.classList.add("fixe");
        if (mySidenav != null)
        {
            mySidenav.classList.add("fixe");
        }
    } 
    else 
    { 
        navBarreElement.classList.remove("fixe");
        if (mySidenav != null)
        {
            mySidenav.classList.remove("fixe");
        }
    }
}

/*------------------------------------------------------Animation-page------------------------------------------------------------*/


document.addEventListener("DOMContentLoaded", () => {
    const transition_el = document.querySelector('.transition-layer');
    const links = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.add('hidden');
    }, 100);

    links.forEach(link => {
        link.addEventListener('click', e => {
            
            if (link.hostname === window.location.hostname && 
                link.pathname !== window.location.pathname &&
                !link.getAttribute('target')) {
                
                e.preventDefault();
                const target = link.href;

                transition_el.style.transition = "none";
                transition_el.classList.remove('hidden');
                transition_el.style.transform = "translateY(-100%)";

                void transition_el.offsetWidth;

                transition_el.style.transition = "transform 0.6s ease-in-out";
                transition_el.style.transform = "translateY(0)";

                setTimeout(() => {
                    window.location.href = target;
                }, 600);
            }
        });
    });
});