//create a project where completely random inspirational messages are generated depending on the mood of a user. The three types of data which are outputed for these messages are: (i) The users mood depending on their score from one to ten. This will reiterate back to the user how they are feeling in a more uplifting way. (ii) The 2nd output message will depend on the users favourite holiday destination. This will form a way of uplifting the user just by imagining this and will output a different set of messages for how they can be uplifted. (iii) The 3rd output message will depend on the users favourite dessert.
/*let introText = "Hello this program is catered to returning random uplifting messages for you. Before we do this, we would like to ask you a few questions. Thank you for joining us and interacting with us today."
let question1 = "How are you feeling today from a score of 0(awful) to 10(amazing)"
let question2 = "If you could pack your bags today and fly out to anywhere in the world all expenses paid where would be your ideal location of choice:"
let question3 = "What type of temperature do you prefer on holiday? Hot, warm, cool or freezing:"
let question4 = "What is your favourite dessert?:"
*/


const message = {
                positive:['I am inspired','How are you'],
                truth:['hello','fjhgjg'],
              happiness:['ghfg','fhhg','jhjg']
}



getRandomMessage = () => {
const randomG = Math.floor(Math.random() * message.positive.length);
console.log(message.positive[randomG])
  }


getRandomMessage();

/*

  return this._courses[courseName].push(dish);


getRandomDishFromCourse(courseName) {
 const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
},
*/
