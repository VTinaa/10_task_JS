// 1. Напишіть функцію, яка приймає 2 рядки та порівнює їх
// довжину. Функція повертає 1, якщо в першому рядку
// більше символів, ніж у другому; -1 – якщо у другому біль-
// ше символів, ніж у першому; 0 – якщо рядки однакової
// довжини.

{
    // let strings = (str1, str2) =>{
    //     if (str1.length > str2.length) {
    //       return 1;
    //     } else if (str1.length < str2.length) {
    //       return -1;
    //     } else {
    //       return 0;
    //     }
    //   }
    //   console.log(strings("Hello", "World"));
    //   console.log(strings("Hello world", "world"));
    //   console.log(strings("hi", "world"));

    /////////////////////////////////////////////////////

    let str1 = prompt("Enter string 1:");
    let str2 = prompt("Enter string 2:");

    let row = (str1, str2) =>{
        if (str1.length > str2.length) {
        return 1;
        } else if (str2.length > str1.length) {
        return -1;
        } else {
        return 0;
        }
    }
    let result = row(str1, str2);
    console.log(result);
}

// 2. Напишіть функцію, яка переводить у верхній регістр пер-
// ший символ переданого рядка.

{
    let row = (str) =>{

        let first = str[0].toUpperCase();


        return first + str.slice(1);
      }

      const s = "hello, world!";
      const res = row(s);
      console.log(res);
}

// 3. Напишіть функцію, яка підраховує кількість голосних
// літер у переданому рядку.

{
    let countVowels = (str) =>{
        let res = 0;
        const vowels = ['a', 'e', 'i', 'o', 'u', 'а', 'е', 'є', 'і', 'ї', 'о', 'у', 'ю', 'я'];
        for (let i = 0; i < str.length; i++) {
          if (vowels.includes(str[i])) {
            res++;
          }
        }
        return res;
      }

      let userInput = prompt("Enter string:");

      let result = countVowels(userInput);

      console.log("Vowels: " + result);
}

// 4. Напишіть функцію для перевірки спаму в переданому
// рядку. Функція повертає true, якщо рядок містить спам.
// Спамом вважати наступні слова: 100% безкоштовно,
// збільшення продажів, тільки сьогодні, не видаляйте, ххх.
// Функція має бути нечутливою до регістру.

{
    let spam = ["100% безкоштовно", "збільшення продажів", "тільки сьогодні", "не видаляйте", "ххх"];
    let line ="Lorem Ipsum 100% безкоштовно is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard збільшення продажів dummy text ever since the 1500s, when an unknown printer took a galley of type and ххх scrambled it to make a type specimen book";
    let notSpam = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" ;

    let findSpam = (line, span) =>{
        for (let i = 0; i < spam.length; i++) {
            if((line.toLowerCase()).indexOf(spam[i].toLowerCase()) != -1){
                return true;
            }
            return false;

        }
    }
    console.log(findSpam(line,spam));
    console.log(findSpam(notSpam,spam));
}

// 5. Напишіть функцію скорочення рядка. Функція приймає
// рядок та його максимальну довжину. Якщо довжина ряд-
// ка більша, ніж максимальна, необхідно відкинути зайві
// символи, додавши замість них трикрапку.
// Наприклад: truncate("Hello, world!", 8) має повернути
// "Hello...".

{
    let number = 5;
    let truncate = (line, number) => {
        if (line.length <= number) {
            return line;
        }
        let truncLine = "";
        for (let i = 0; i < number; i++) {
            if (i < (number - 3)) {
                truncLine += line[i];
                continue;
            }

            truncLine += '.';
        }
        return truncLine;
    }

    console.log(truncate("Hello World", number));
}

// 6. Напишіть функцію, яка перевіряє, чи є переданий рядок
// паліндромом.

{
    let palindrome = (str) =>{
        let reversedStr = str.split('').reverse().join('');
        return str == reversedStr;
      }

      console.log(palindrome("Hello world"));
}


// 7. Напишіть функцію, яка підраховує кількість слів у речен-
// ні.

{
    let string = (sentence) => {
        const strArray = sentence.split(" ");
        return strArray.length;
      }

      let sentence = "The standard chunk of Lorem Ipsum used sinc";
      console.log(string(sentence));
}


// 8. Напишіть функцію, яка повертає найдовше слово з речен-
// ня.

{
    let longWord = (sentence) =>{
        let word = sentence.split(' ');
        let maxLength = 0;
        let longWord = '';

        for (let i = 0; i < word.length; i++) {
          if (word[i].length > maxLength) {
            maxLength = word[i].length;
            longWord = word[i];
          }
        }

        return longWord;
      }

      console.log(longWord("The standard chunk of Lorem Ipsum used since"));
}


// 9. Напишіть функцію, яка підраховує середню довжину
// слова у реченні.


{
    let word = "The standard chunk of Lorem Ipsum used since";

    let wordLength = (word) =>{

        let wordsArray = word.split(' ');
        let length = 0;
        for (let i = 0; i < wordsArray.length; i++) {
            length += wordsArray[i].length;
        }

        let averageLength = length / wordsArray.length;

        return averageLength;
    }

    console.log(wordLength(word));

}

// 10. Напишіть функцію, яка приймає рядок і символ і виводить
// індекси, за якими знаходиться цей символ у рядку. Також
// виведіть, скільки разів зустрічається цей символ у рядку.

{
    let string = (str, char) =>{
        let index = [];
        let count = 0;
        
        for (let i = 0; i < str.length; i++) {
          if (str[i] === char) {
            index.push(i);
            count++;
          }
        }
      
        console.log(`Indexes: ${index}`);
        console.log(`Symbol occurs: ${count}`);
    }
    string("hello world", "l");
}