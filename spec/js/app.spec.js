// test feature 1
describe('changeH1', function() {
	// Our individual tests go here
         let h1 = document.createElement('h1');
         h1.id = "head";
         h1.innerText = "Our different text";

        it('returns', function() {
            expect(changeH1()).toEqual("Our different text");
        })
    })

// test feature 3
    describe ('addElement', function(){
        let newElement = document.createElement("h3");
        newElement.innerText = "New Text"

        it('returns', ()=>{
            expect(addElement()).toEqual(newElement);
        })
    })

// test feature 9 
describe('changeText_Of_ParagraphTag_InMain', function(){
    let paraChange = document.getElementsByTagName("p")[1];
        paraChange.innerHTML = "Change the Text of This Paragraph!";

    it('returns', function() {
        expect(changeText_Of_ParagraphTag_InMain()).toEqual(paraChange);
    })
})
