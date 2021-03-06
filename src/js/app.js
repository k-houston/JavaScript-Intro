// Make h1 in header have different text
// Make nav ul li elements get larger when you hover over them
// Add another element to the main element
// Dynamically change the color of the background on the footer when the user hovers over it
// Change the font size of the paragraphs in the main element when the user clicks them
// Change the text in the footer when the user clicks it
// Remove the h1 element in the header
// Put something in the place of the h1 in the header
// Change the text in one of the paragraph tags in the main element
// Change the size of the header element to 200px using grid syntax

// feature 1
function changeH1() {
     let h1 = document.getElementById("head");
     let newText = "Our different text";
     h1.innerText = newText;
     return newText;
}

//feature 2
function changeli_OnHover(){
    let navitems = document.querySelectorAll("nav > ul > li");
    navitems.forEach(function(item){
    item.addEventListener('mouseover', Increasefontsize);
    item.addEventListener('mouseout', Decreasefontsize);
    });
    }
    function Increasefontsize(){
        this.classList.add("bigfont");
    }
    function Decreasefontsize(){
        this.classList.remove("bigfont");
    } 

// feature 3
function addElement(){
    let newElement = document.createElement("h3");
    newElement.innerText = "New Text";

    let header = document.getElementById('');

    let main = document.getElementsByTagName("main")[0];
    main.prepend(newElement);

    return newElement;
}

 // feature 4
function changeFooterBackground(){
    document.getElementById("footer").addEventListener("mouseover", function(){
        document.getElementById("footer").style.backgroundColor = "red";
    });

    document.getElementById("footer").addEventListener("mouseout", function(){
        document.getElementById("footer").style.backgroundColor = "#39add1";
    });
}

// feature 5
function changeFontInMain(){
    let mainPara = document.querySelectorAll('main > p');
        mainPara.forEach(function(item){
            item.addEventListener('click', Increasefontsize);
});
}

// feature 6
function changeFooterTextOnClick(){
    let footer = document.querySelector("footer > p");
    console.log(footer);

    footer.addEventListener('click', function(e){
        let ourNewText = document.createElement("p");
        ourNewText.innerText = "Copyright MyApp 2021";
        footer.innerText = ourNewText.innerHTML;
    });
}

// feature 7
function removeH1Element(){
    let h1 = document.getElementById("head");
  h1.remove(); 
}

// feature 8
 function addToH1_InHeader() {
     let newH1 = document.createElement('h1'); 
     newH1.innerText = "New Header";

     let newHeader = document.getElementsByTagName("header")[0];
     newHeader.prepend(newH1);
}

// feature 9
function changeText_Of_ParagraphTag_InMain() {
    let paraChange = document.getElementsByTagName("p")[1];
        paraChange.innerHTML = "Change the Text of This Paragraph!";

        return paraChange;
}

// feature 10
function changeHeaderSize() {
    document.getElementsByTagName('header')[0].style.height = "200px";
    document.getElementsByTagName('header')[0].style.display = 'grid';
}
