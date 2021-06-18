class ChangeTabs{
    constructor(tabs__headerTab, tabs__bodyContent){
        this.tabs = document.querySelectorAll(tabs__headerTab);
        this.contents = document.querySelectorAll(tabs__bodyContent);
        //this.db = firebase.firestore();
    }

    change(){
        this.tabs.forEach((tab, index) =>{
            tab.addEventListener('click', ()=>{
                this.tabs.forEach(otherTab =>{
                    otherTab.classList.remove("tabs__headerTab--active");
                })

                this.contents.forEach(otherContent =>{
                    otherContent.classList.remove("tabs__bodyContent--active");
                })

                tab.classList.add("tabs__headerTab--active");
                this.contents[index].classList.add("tabs__bodyContent--active");
            })
        })
    }
}

export default ChangeTabs;