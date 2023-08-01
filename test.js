let str = "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~abc";

let result = 0;

for (let i = 0; i <= str.length  - 1; i++) {
    if (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) {
        result += 1
    }
}

console.log(result);


//97 === 122