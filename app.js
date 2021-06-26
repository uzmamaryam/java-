                           // Assignment # 26-30



//  Q1;  Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = 3.45214;
// var round = Math.round(num);
// document.write("<h1>"+"number: " + num +"</h1>");
// document.write(  "<h1>"  +"round of value: "  + round +"</h1>");
// var floor =Math.floor(num);
// document.write("<h1>"+"floor value: " + floor + "</h1>" )
// var ceil =Math.ceil(num);
// document.write("<h1>"+"ceil value: " + ceil +"</h1>");


// Q2;  Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// // d. ceil value of the number

//   var num = -2.673;
//  var round = Math.round(num);
// document.write("<h1>"+"number: " + num +"</h1>");
// document.write(  "<h1>"  +"round of value: "  + round +"</h1>");
//  var floor =Math.floor(num);
//  document.write("<h1>"+"floor value: " + floor + "</h1>" )
//  var ceil =Math.ceil(num);
//  document.write("<h1>"+"ceil value: " + ceil +"</h1>");


// Q3; Write a program that displays the absolute value of a
// number.

// var a = -5;
// var  b = Math.abs(a);
// document.write("<h1>"+"The absolute value of -5 is " + b + "</h1>");


// Q 4;   Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:   

// var  random = Math.floor(Math.random()*6+1);
// document.write("<h1>"+"random dice value: "  + random +"</h1>");


//  Q5 Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser   

// var head = 1;
// var tail = 2;

// var toss = Math.random() * 2+1;
// var floor = Math.floor(toss)
// if(floor === 1){
//     document.write("<h1>"+"1 <br> Random Coin Value: Tails"+"</h1>")
// } else if(floor === 2)
// {
//     document.write("<h1>"+"2 <br> Random Coin Value: Head"+"</h1>")
// }


//  Q 6; Write a program that shows a random number between 1
// and 100 in your browser.

// var  random = Math.floor(Math.random()*100+1);
// document.write("<h1>"+"random number between 1 and 100:"  + random +"</h1>");

// 7.Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
  
// var a = prompt("Enter your  weight in kilograms");
// document.write("<h1>"+"The weight of user is " +a +"</h1>");

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var num = Math.ceil(Math.random() * 10+1);
// document.write( "Secret Number is " +num);
//  var user = prompt('Enter a number between 1 and 10');
//  if (user == num){
//    document.write("<h1>"+'congratulate'+"</h1>");
//  }
//   else
//   {
//   document.write("<h1>"+'Not congratulate '+"</h1>");
//   }


                                      // Assignment # 31-34


//    1. Write a program that displays current date and time in
//     your browser. 

// var today = new Date(); 
//  document.write("<h1>"+today+"</h1>")

// 2. Write a program that alerts the current month in words.
// For example December.
// var my_month=new Date()
        
// var month_name=new Array(12);
// month_name[0]="January"
// month_name[1]="February"
// month_name[2]="March"
// month_name[3]="April"
// month_name[4]="May"
// month_name[5]="June"
// month_name[6]="July"
// month_name[7]="August"
// month_name[8]="September"
// month_name[9]="October"
// month_name[10]="November"
// month_name[11]="December"

// alert ("Current month = " + month_name[my_month.getMonth()]);


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
// alert("Today is " +nameOfToday)


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var currentDate = new Date();
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }else if(c === "Mon"){
//     document.write()
// }else if(c === "Tue"){
//     document.write()
// }else if(c === "Wed"){
//     document.write()
// }else if(c === "Thr"){
//     document.write()
// }else if(c === "Fri"){
//     document.write()
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
 


// var m = prompt("Enter the date of month");
// if (m < 16 ) {
//     document.write("<h1>" +"First fifteen day of the month"+ "</h1>");
// }
// else  {
//     document.write("<h1>" +"Last day of the month"+"</h1>") ; 
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


// var today = new Date();
// document.write("<b>"+"Current Date: " +today+"</b>"+"<br>")
// var msToday = today.getTime();
// document.write("<b>"+"Elapsed milliseconds since Jan 1 , 1970: "+msToday+"</b>"+ "<br>");
// var b = msToday/ (1000 * 60 * 60 );
// document.write("<b>"+"Elapsed milliseconds since Jan 1 , 1970: "+b+"</b>")

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.


// var m = new Date();
// if (m < 12) {
//     alert("It's AM");
// }
// else  {
//    alert("It's PM") ; 
// }