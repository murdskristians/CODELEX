export {};

function onlyTheAces(arr) {
    return arr.filter( el => el == "Ace")
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
