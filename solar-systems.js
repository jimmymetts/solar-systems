console.log("test")

// const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

// const planetEl = document.getElementById("planets")

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/


// planets.map(element => {
//     console.log(element);
//     const capitol = element.toLocaleUpperCase()
//     planetEl.innerHTML += `
// <h1>${capitol}</h1>`
// }
// )

// for (let element of planets) {
//     element = element.charAt(0).toUpperCase() + element.substr(1);  /* this one works! - whole funtion first letter*/
//     console.log(element);
//     planetEl.innerHTML += `
//      <h1>${element}</h1>`
// }

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

// const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]


// const planetEl = planets.map()




/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


// var ages = [32, 33, 12, 40];

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

const planetEl = document.getElementById("planets")

let ePlanet = [];
console.log(ePlanet)
planets.filter( planet => {
    if(planet.includes("e") === true) {
        ePlanet.push(planet)
        

    // } else {
    //     console.log("no");

     }
})
ePlanet.join("")
console.log(ePlanet)
planetEl.innerHTML += `
         <h1>${ePlanet}</h1>`



         function register(){               // <-- new way to try and make planet list print vertically
          
            // var ids = ['name','lname','email','password','cpassword'];
            var printThis = "";
            for(var i = 0; i < planets.length; i++){
                printThis += "<br>" + planets[i];
            }
            return printThis; // <-- to be printed to the div
        }
        document.getElementById('planets').innerHTML = register();

// const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

// const planetEl = document.getElementById("planets")

// let ePlanet = [];                            /* this works */
// console.log(ePlanet)
// planets.filter( planet => {
//    if(planet.includes("e") === true) {
//     //    ePlanet.push(planet)
//        planetEl.innerHTML += `
//         <h1>${planet}</h1>`

//    } else {
//        console.log("no");

//    }
// })