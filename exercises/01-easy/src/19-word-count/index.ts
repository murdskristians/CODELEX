/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string) {
    let input = str;
    let arrayOfWords = input.replace('\t',' ').trim().split(/\s+/);

    var wordCounts:any = Object.create(null);

    for (let i = 0; i < arrayOfWords.length; i++) {
      var word = arrayOfWords[i].toLocaleLowerCase();
      // if this word is not already a property of the wordCounts object, create it with the value of 1
      if (!wordCounts[word]) {
          wordCounts[word] = 1;
      } else {
      // if this word IS already a property of wordCounts, then increase its count value
          wordCounts[word]++;
      }
    }
    return wordCounts;
  }
}

export { Words };
