// let favoriteSciFi = {
//     wookie: 'Chewbacca',
//     ship: 'Enterprise',
//     captain: "Picard",
//     potato: "Russet",
//     number: 3,
//};



/* FIND SOMETHINE USEFUL AND MEANINGFUL THAT YOU WANT TO PUT ON THIS PAGE */


import { starships } from '/assets/starships.js';

let ships = document.querySelector("#ship-list");
console.log("potatoes are good");
console.log(starships.slice(11, 13));
ships.textContent = starships[12].name;
console.log(ships);

starships.forEach((crew) => {
  console.log(starships.crew);
});



import { people } from '/assets/people.js';

let person = document.querySelector("#name-list");
// console.log(name);
  console.log(people);
  person.textContent = people[5].name;
 // people.textContent = "Owen Lars";
 // people.href = 'http://vignette2.wikia.nocookie.net/moviemorgue/images/2/2f/Owenlars.jpg/revision/latest?cb=20130421142452';

// var para = document.createElement('p');
// para.textContent = "WHERE ARE THE SHIPS";
// starships.forEach((starships) => {
//   let listItem = document.createElement('li')
//   listItem.textContent = starships.name
//   // textContent.appendChild(listItem)
//   console.log(starships.name)
  
// });

var rotate = document.querySelector('.project-tile');
rotate.addEventListener( 'mouseover', function() {
  rotate.classList.toggle('is-flipped');
}); 



// console.log(starships[5]);





  // var x = (is assigned the value of) document('a'). The following thing will only apply to the first 'a' thing. //
    // var link = document.querySelector('a');
    // Console log: will come up in the browser console.
    // console.log("Hi, I am a ginger");
    // console.error('Bad things! Oh no!');

    // console.log(link);
    // uncomment following lines to see the change it would make.
    // link.textContent = 'Mozilla Developer Network'
    // link.href = 'https://developer.mozilla.org/en-US/' 

    // var welcome = document.querySelector('#welcome-section');
    // var para = document.createElement('p');
    // para.textContent = 'We hope you enjoyed this page!';
    // welcome.appendChild(para);

    // var text = document.createTextNode(' - The premier source for web development knowledge.');
    // var linkPara = document.querySelector('p');
    // linkPara.appendChild(text);

    // var git = document.querySelector('#profile-link-text')
    // git.textContent = 'This is the link to my Github profile: click here to go there!'
    
    // var checkOut = document.querySelector('#project-header')
    // var subtitle = document.createElement('p')
    // subtitle.textContent = "Potatoes are really good too, but they don't have much to do with this! (This text is a script experiment)"
    // checkOut.appendChild(subtitle)
    // Watch the videos!
  