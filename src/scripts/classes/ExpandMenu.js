/* Expander menu */

class ExpandMenu{

    constructor(toggleId, navBarId){
        this.toggle = document.getElementById(toggleId);
        this.navBar = document.getElementById(navBarId);
        
    }

    expand(){
        if(this.toggle && this.navBar){
            this.toggle.addEventListener('mouseenter', ()=>{
                this.navBar.classList.add('expand');
            })

            this.toggle.addEventListener('mouseleave', ()=>{
                this.navBar.classList.remove('expand');
            })
        }
    }
}

export default ExpandMenu;