
// - створити функцію яка приймає масив та виводить його

 let yo=[1,2,3,4,5,6,7]
 let funink = it =>{
    console.log(it)
     for (const item of it) {
         console.log(item)

     }
 }
 funink(yo)


 // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


function fskill(num1,num2,num3) {
    if (num1<num2 && num1<num3){
        return num1;
    } else if (num2<num1 && num2<num3){
        return num2;
    }else {
        return num3
    }


}
console.log(fskill(2,1,0));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function fcool(num1,num2,num3) {
    if (num1>num2 && num1>num3){
        return num1;
    } else if (num2>num1 && num2>num3){
        return num2;
    }else {
        return num3
    }


}
console.log(fcool(1,3,0));


// - створити функцію яка повертає найбільше число з масиву


let funmax = hi =>{
    let max = 0
    for (let item of hi){
        if (item > max) max = item;
    }
    return max
}
let yi = [3,2,8,4,5]

console.log(funmax(yi))



// - створити функцію яка повертає найменьше число з масиву
function fg(a){
    let min=20;
    for (let item of a){
        if (item < min) min = item;
    }
    return min
}
let ya = [0,2,3,4,5]

console.log(fg(ya))



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function gf(oop){
    let a=0
    for (const elem of oop){
        a+=elem
    }
    return a
}
let hp = [6,2,2]
console.log(gf(hp))


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function hg(aer){
    let a = 0
    for (const item of aer){
        a+=item
    }
    return a/aer.length
}
let gg =[5,5]
console.log(hg(gg))


// створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.

function gh(a){
    let lk = []
    for (let i=0;i<a;i++){
        lk.push(Math.floor(Math.random()*100));
    }
     return lk
}
console.log(gh(10))


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function vc(){
//
// }





// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]





// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//   [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]







// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.



let hi =['a', 'b', 'c']
hi.push(1,2,3)
console.log(hi)

let hi1=[1,2,3]
let hi2 = hi1.splice(0,3,3,2,1)
console.log(hi1)

let h3 =[1, 2, 3]
h3.push(4,5,6)
console.log(h3)
h3.unshift(4,5,6)
console.log(h3);


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].

let arr = [1, 2, 3, 4, 5]
arr.splice(0,3)
console.log(arr)

let arr2 =[1, 2, 3, 4, 5]
arr2.splice(2,4)
console.log(arr2)

let arr3 = [1, 2, 3, 4, 5]
arr3.splice(3,4,'a','b','c')
console.log(arr3);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let num=[1,2,3,4,5,6,7,8,9,10]
for (let item of num){
    if (item%2 === 0){
      console.log(item)
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let nun = [1,2,3,4,5,6,7,8,9,10]
let nun2 =[]
for (let i=0;i<nun.length;i++){
     nun2.push(nun[i])
}
console.log(nun2)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.











