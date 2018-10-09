// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done!"
  setTimeout(() => resolve("success"), 4000);
});

// #2) Run the above promise and make it console.log "success"

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => 
  resolve("success"), 
  4000);
});
console.log(promise);

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

var promise1 = Promise.resolve(setTimeout(() =>"success"), 4000);

// #4) Catch this error and console log 'Ooops something went wrong'
var promise2 = Promise.reject('failed');

promise2.catch(function(error) {
  console.log("Ooops something went wrong");
});

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]  
  // map every url to the promise fetch(github url)
  let requests = urls.map(url => fetch(url));
  
  // Promise.all waits until all jobs are resolved
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => console.log(requests)
    ));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?