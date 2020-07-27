export {};

function tidyUpString(str:string[]):string[] {
  return str.map( name => name.trim().toLowerCase().replace("/", "") )
}

// You are allowed to edit this function
function capitalise(str:string[]):string[] {
  return str.map( name => name.charAt(0).toUpperCase() + name.slice(1) )
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = tidyUpString(mentors); // You are allowed to edit this line

console.log(capitalise(mentorsTidy)); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
