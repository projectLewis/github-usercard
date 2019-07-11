/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// const axios = require('axios');

axios.get('https://api.github.com/users/projectlewis')
  .then((response) => {
    // const gitRes = JSON.parse(response);
    const {avatar_url, name, login, location, html_url, followers, following} = response.data;
    console.log(avatar_url);
  }).catch((error) => {
    console.log(error);
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
let data;
const getProfile = (profile) => {
  axios.get(`https://api.github.com/users/${profile}`)
  .then((response) => {
    githubProfileGen(response);
  }).catch((error) => {
    console.log(error);
  })
}

const githubProfileGen = (arg) => {
  console.log('made it!');
  const {avatar_url, name, login, location, html_url, followers, following, bio} = arg.data;

  const cards = document.querySelector('.cards');
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = `${avatar_url}`

  const cardInfo =document.createElement('div');
  cardInfo.className = 'card-info'

  const profileName = document.createElement('h3');
  profileName.textContent = name

  const username = document.createElement('p');
  username.className = 'username';
  username.textContent = login;

  const profileLocation = document.createElement('p');
  profileLocation.textContent = `Location: ${location}`;

  const profile = document.createElement('p');
  profile.innerHTML = `<a href=${html_url}>${html_url}</a>`
  const profileFollowers = document.createElement('p');
  profileFollowers.textContent = `Followers: ${followers}`
  const profileFollowing = document.createElement('p');
  profileFollowing.textContent = `Following: ${following}`
  const profileBio = document.createElement('p');
  profileBio.textContent = `Bio: ${bio}`

  cards.appendChild(card);
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(profileName);
  cardInfo.appendChild(username);
  cardInfo.appendChild(profileLocation);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(profileFollowers);
  cardInfo.appendChild(profileFollowing);  
  cardInfo.appendChild(profileBio);  

}

getProfile('projectlewis')
