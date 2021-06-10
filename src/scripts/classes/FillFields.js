class FillFields{

    constructor(fields){
      // console.log(fields);
        this.fields = fields;
        //this.input = input;
        // this.name = document.getElementById("name");
        // this.code = document.getElementById("code");
        // this.pre = document.getElementById("pre");
        // this.career = document.getElementById("career");
        // this.semester = document.getElementById("semester");
        // this.weekhours = document.getElementById("weekhours");
        // this.credits = document.getElementById("credits");
        // this.generalobj = document.getElementById("generalobj");
        // this.terminalobj = document.getElementById("terminalobj");
        //console.log(this.name);
    }

    setTexts(fields){
        var fieldsArray = fields;
        console.log(fieldsArray);
        fieldsArray.forEach(fi => {
            console.log(fi);
            if(fi.exist){
            }
        });
    }

    getFields(){
        return this.fields;
    }

}

export default FillFields;