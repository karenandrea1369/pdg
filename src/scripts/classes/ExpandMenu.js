/* Expander menu */

class ExpandMenu{

    constructor(toggleId, navBarId){
        this.toggle = document.getElementById(toggleId);
        this.navBar = document.getElementById(navBarId);
        
    }

    expand(){
        if(this.toggle && this.navBar){
            //console.log(this.toggle);
            //console.log(this.navBar);
            this.toggle.addEventListener('click', ()=>{
                this.navBar.classList.toggle('expand');
            })
        }
    }
}

export default ExpandMenu;