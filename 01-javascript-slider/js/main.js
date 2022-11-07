// Napisz slider

// 1. Stworz tablice, zawierajaca zrodla do 5 roznych obrazkow
// 2. Na start strony, dodaj do obrazka atrybut src z pierwszego elementu tablicy
// 3. Stworz zmienna typu number, ktora bedzie trzymala informacje, ktory jest aktualnie aktywny slajd (uzyj do tego indeksu)
// 4. Po wcisnieciu przycisku next, zmien wartosc licznika, a nastepnie zamien wartosc atrybutu src w obrazku (na nastepny)
// 5. Po wcisnieciu przycisku prev, zmien wartosc licznika, a nastepnie zamien wartosc atrybutu src w obrazku (na poprzedni)
// 6*. Zrob obsluge karuzeli tzn. jak jestesmy na ostatnim obrazku i wcisniemy next, to pokaz pierwszy obrazek, a jak jestesmy na pierwszym obrazku i wcisniemy prev, to pokaz ostatni obrazek. Uzyj do tego zmiennej z licznikiem.

let images = [
    "https://psy-pies.com/pliki/image/foto/duze/foto62d3fb32a7fc1.jpg",
    "https://sites.google.com/site/pieskiikanarki/_/rsrc/1403487648981/slodkie-pieski/piese%C5%82%202.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdN_1EeRccW0Mv5PU5vVOeUpHg7HSR2jNMpMdXodZbDuQghjKnDgo5reGV0lY4fi29aw&usqp=CAU",
    "https://zoonews.pl/wp-content/uploads/2021/08/king-charles-cavalier.jpg",
    "https://static.ising.pl/songs/9214/cover_640.jpg"
]

const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const image = document.querySelector("#image");

let imageNumber = 0;

image.setAttribute("src", images[imageNumber]);

const prevButtonClick = () => {
    if(imageNumber==0){
        imageNumber = images.length-1;
    } else {
        imageNumber--;
    }
    console.log("Current Image Number: " + imageNumber);

    image.setAttribute("src", images[imageNumber]);
}

const nextButtonClick = () => {
    if(imageNumber == images.length-1){
        imageNumber = 0;
    } else {
        imageNumber++;
    }
    
    console.log("Current Image Number: " + imageNumber);
    image.setAttribute("src", images[imageNumber])
}

prevButton.addEventListener('click', prevButtonClick)
nextButton.addEventListener('click', nextButtonClick)