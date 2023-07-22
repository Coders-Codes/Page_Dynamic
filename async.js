console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {

  const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 3000)
  });

//   USING ASYNC AWAIT FUNCTION

  const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"));

  const addButter = new Promise((resolve, reject) => resolve("butter"));

  const getColdDrinks = new Promise((resolve, reject)=> resolve("colddrinks"));

  let ticket = await promiseWifeBringingTicks;

  console.log(`wife:I have the ${ticket}`);
  console.log("husband: we should go in");
  console.log("wife: no I am hungry");

  let popcorn = await getPopcorn;

  console.log(`husband: I got some ${popcorn}`);
  console.log("husband: we should go in");
  console.log("wife: I need butter on my popcorn");

  let  butter = await addButter;

  console.log(`husband: I got some ${butter} on  popcorn`);
  console.log("husband: anything else darling?");
  console.log("wife: lets go we are getting late");
  console.log('husband:Thank you for the reminder *grins*')

  let colddrinks = await getColdDrinks;

  console.log(`Wife:wait, can you please bring ${colddrinks}`);
  console.log('Husband: yes, anything else ?')
  console.log("Husband : Here is your coldrink")
  console.log('Wife: Lets go in now')
  console.log('Husband: finally!')

return ticket;
}

preMovie().then((m) => console.log(m));

console.log("person4: shows ticket");
console.log("person5: shows ticket");



// Promise.all with async await

// const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"));

// const getCandy = new Promise((resolve, reject) => resolve("candy"));

// const getCoke = new Promise((resolve, reject)=> resolve("coke"));

// let ticket = await promiseWifeBringingTicks;

// let[popcorn, candy, coke] = await Promise.all([getPopcorn,getCandy,getCoke ])
// console.log(`${popcorn}, ${candy}, ${coke}`)

// return ticket;
// }

// preMovie().then((m) => console.log(`person3: shows ${m}`));

// // console.log("person4: shows ticket");
// console.log("person5: shows ticket");


// // ERROR CHECKING(CATCH FOR RECHECK)REJECTIONG OF THE PROMISE

// const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//     setTimeout(() => reject("ticket"), 3000)
//   });

// let ticket
// try{
//     ticket = await promiseWifeBringingTicks;
// } catch(error){
//     ticket ='sad face';
// }
// return ticket;
// }

// preMovie().then((m) => console.log(`person3: shows ${m}`));

// console.log("person4: shows ticket");
// console.log("person5: shows ticket");
