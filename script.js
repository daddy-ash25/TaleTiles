const sidebar = document.querySelector('.sidebar');
const menue_button = document.querySelector('.menue-button');
const mainbody = document.querySelector('.main-body');

menue_button.addEventListener("click",()=>{
    let sidebar_display_status = getComputedStyle(sidebar).display;
    if(sidebar_display_status == "none"){
        sidebar.style.display = "block";
    }
    else {
        sidebar.style.display = "none";
    }


    sidebar_display_status = getComputedStyle(sidebar).display;
    const screenwidth = window.matchMedia("(min-width: 1025px)");
    console.log(screenwidth);
    if(screenwidth.matches == true){
        if(sidebar_display_status == "none"){
            mainbody.style.gridColumn = "1/3";
        }
        else{
            mainbody.style.gridColumn = "2/3";
        }
    }
});

