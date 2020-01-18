// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

const addExcitement = (theWordArray, char, num) => {

    let buildMeUp = "";

    for (let i = 0; i < theWordArray.length; i++) {
        if (i % 3 === 0 && i !== 0) {
            buildMeUp += " " + theWordArray[i] + repeatChar(char, num);
        }
        else {
            buildMeUp += " " + theWordArray[i];
        }
        console.log(buildMeUp);
    }
};

const repeatChar = (char, num) => {
    let chars = "";
    for (let i = 0; i < num; i++) {
        chars += char;
    }
    return chars;
}

addExcitement(sentence, "?", 4);
