/*


    var datass = '';
    var DataArr = [];
    PDFJS.workerSrc = '';

   function ExtractText(fileinput) {
        var fReader = new FileReader();
        fReader.readAsDataURL(fileinput.files[0]);
        // console.log(input.files[0]);
        fReader.onloadend = function (event) {
            convertDataURIToBinary(event.target.result);
        }
    }

    
    function convertDataURIToBinary(dataURI) {
        var BASE64_MARKER = ';base64,';
        var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
        var base64 = dataURI.substring(base64Index);
        var raw = window.atob(base64);
        var rawLength = raw.length;
        var array = new Uint8Array(new ArrayBuffer(rawLength));

        for (var i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        pdfAsArray(array)
        
    }

    function getPageText(pageNum, PDFDocumentInstance) {
        // Return a Promise that is solved once the text of the page is retrieven
        return new Promise(function (resolve, reject) {
            PDFDocumentInstance.getPage(pageNum).then(function (pdfPage) {
                // The main trick to obtain the text of the PDF page, use the getTextContent method
                pdfPage.getTextContent().then(function (textContent) {
                    var textItems = textContent.items;
                    var finalString = "";
                    
                    // Concatenate the string of the item to the final string
                    for (var i = 0; i < textItems.length; i++) {
                        var item = textItems[i];
                        finalString += item.str + "";
                    }

                    // Solve promise with the text retrieven from the page
                    resolve(finalString);
                });
            });
        });
    }

    function pdfAsArray(pdfAsArray) {

        PDFJS.getDocument(pdfAsArray).then(function (pdf) {

            var pdfDocument = pdf;
            // Create an array that will contain our promises
            var pagesPromises = [];

            for (var i = 0; i < pdf.pdfInfo.numPages; i++) {
                // Required to prevent that i is always the total of pages
                (function (pageNumber) {
                    // Store the promise of getPageText that returns the text of a page
                    pagesPromises.push(getPageText(pageNumber, pdfDocument));
                })(i + 1);
            }
            // Execute all the promises
            Promise.all(pagesPromises).then(function (pagesText) {

                // Display text of all the pages in the console
                // e.g ["Text content page 1", "Text content page 2", "Text content page 3" ... ]
                // representing every single page of PDF Document by array indexing
                //console.log("Pages text---->", pagesText);
                // console.log("Pages text length ---->", pagesText.length);
                for (var pageNum = 0; pageNum < pagesText.length; pageNum++) {
                    //console.log("Pages text pagenum ---->", pagesText[pageNum]);
                    //outputStr = "";
                    //outputStr = "<br/><br/>Page " + (pageNum + 1) + " contents <br/> <br/>";
                    //var div = document.getElementById('output');
                    //div.innerHTML += (outputStr + pagesText[pageNum]);
                    pdftext = pdftext.concat(pagesText[pageNum]);
                };
                addLineBreak();
                findFields(pdftext);
            });
        }, function (reason) {
            // PDF loading error
            console.error(reason);
        });
    }

    //--------------------------- SEPARATE PDF ------------------------------
    function addLineBreak(){
        var regexp = / [0-9]\./g;
        var originText = pdftext.split('');
        var results = [...pdftext.matchAll(regexp)];
        for (let i = 0; i < results.length; i++) {
            originText.splice(((results[i].index)+i), 0, "<br>");
        }
        pdftext = originText.join('');
    }

    function findFields(text){
        //if found the field, save the begin and end position of it in the string
        fields.forEach(field =>{
            if(text.search(field.field) != -1){
                field.exist = true;
                field.start = text.search(field.field);
                field.end = text.search(field.field) + field.field.length;
                //console.log(field.field, field.start, field.end);
            }
        });

        //sort fields in order of start
        fields.sort(sortFields);
        putFieldsContent(fields, text);
    }

    function sortFields( a, b ) {
        return a.start - b.start;
    }

    function putFieldsContent(array, originText){
        array.forEach((obj, index) =>{
            if(obj.end != 0){ //to all fields that exist
                if(index+1 < array.length){
                    var content = originText.substring(obj.end, array[index+1].start).trim();
                    obj.content = content;
                    console.log(obj.field, obj.content);
                }else{
                    var content = originText.substring(obj.end);
                    obj.content = content;
                    console.log(obj.field, obj.content);
                }
            }
        });
    }
*/