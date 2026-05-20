//  Fisher Yates Algorithm (also known as the Knuth shuffle) is an efficient, in-place algorithm for generating a random permutation of a finite sequence. 
//  It is considered the gold standard for shuffling because it produces an unbiased permutation, ensuring that every possible ordering of the elements is equally likely. 

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);

console.log(cards);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

       [array[i], array[random]] = [array[random], array[i]];
    }
}