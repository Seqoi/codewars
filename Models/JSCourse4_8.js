//We ended with function's of alert prompt and confirm
/*alert - output one message
  prompt - output one message and take strinng on enter
  saving him on the variable*/


/* confirm - output the answer and save the answer in boolean variable*/
//We continue with swapping the types of data 
/*alert("" + 1 + 0); //10
alert("4px" - 2); //NaN
alert("  9  " - 5);//4
alert("  9  " + 5);//9  5 
alert(null + 1);// 1
alert(undefined + 1);// NaN
alert(" \t 5 \n \n" + 2);// ->| 5 \n  \n  2
*/


//Используя конструкцию if..else, напишите код, который будет 
//спрашивать: „Какое «официальное» название JavaScript?“

/*let answer = prompt("Какое «официальное» название JavaScript?");
if (answer == "ECMAScript"){
  alert("Верно!");
}else {
  alert("Не знаете? “ECMAScript”!");
}
*/

//Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
/* 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
*/
// Предполагается, что пользователь вводит только числа.

/*let number = prompt("Enter please u're number!", 23);
if (number > 0){
  alert("1");
}else if (number < 0){
  alert("-1")
}else {
  alert("0")
}
*/

//Перепишите конструкцию if с использованием условного оператора '?':

/*let result = (a + b < 4) ?  "Few" : "Much";*/

//Перепишите if..else с использованием нескольких операторов '?'.
/*let message = (login == 'Staff') ?  'Hello':
              (login == 'Director') ? "U're welcome":
              (login == '') ? "No login" : '';*/

//Напишите условие if для проверки, что переменная age находится в диапазоне 
//между 14 и 90 включительно.

let age = prompt("Enter u're age");
if (age >= 18 ^ age <= 90){
  alert("U're age is normal")
}else {
  alert("Bro u have no reauired age to enter")
}
//Напишите условие if для проверки, что значение переменной age НЕ находится 
//в диапазоне 14 и 90 включительно.
//меняем && на ^ - получаем необходимый результат 

//Напишите код, который будет спрашивать логин с помощью prompt.

/*Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».*/

let enter = prompt("Who are u?")
if(enter == null){
  alert("Enter was intrerupted")
}else if (enter == "Admin"){
  let password = prompt("Please enter the password")
  if(password == null){
    alert("Enter was intrerupted")
  }else if(password = "I'm the boss"){
    alert("U're welcome boss");
  }else {
      alert("Incorrect password")
    }
  }else {
    alert("I don't knonw u!")
  }