//////////   1st question


        // function showDate(){
        //     var a=  Date()  
        // } 
        // showDate()


        ///////////// 2nd question


        // function greet(){
        //     var first=prompt("enter your first name")
        //     var second=prompt("enter your last name")
        //     document.write("hello "+ first +second)
        // }
        // greet()



        ///////  3rd question

        // function sumNumber(){
        //     var no1=+prompt("Enter first number")
        //     var no2=+prompt("enter last number")
        //     var final=no1+no2
        //      document.write(final)
        // }
        //  sumNumber()



        ////////  4th question
        // function calculator() {

        //     var num1 = +prompt("enter your first number")
        //     var num2 = prompt("enter your second number")
        //     var operator = prompt("what you perfoam in between two number")
        //     if (operator == "+") {
        //         document.write(num1 + num2)
        //     }
        //     else if (operator == "-") {
        //         document.write(num1 - num2)
        //     }
        //     else if (operator == "*") {
        //         document.write(num1 * num2)
        //     }
        //     else if (operator == "/") {
        //         document.write(num1 / num2)
        //     }
        //     else if (operator == "%") {
        //         document.write(num1 % num2)
        //     }
        //     else {
        //         document.write("plese valid operator")
        //     }



        // }
        // calculator()

   ///////////////  5th question

//     function square(){
//         var user=+prompt("which number do you call square")
//         var muli=user*user
//         document.write(user  + " square is "+ muli)
//     }
//    square()


 ///////////////// 6th question

// function factorail(n){
   
//     console.log(n)
//    if(n==0){
//     return 1
//    }
//    else{
//    return factorail(n-1)*n
//    }
// }

// document.write( factorail(+prompt("Enter for factorial")))

/////////////  7th question

// function count(){}
// var num1=+prompt("enter  a start number")
// var num2=+prompt("enter  a start number")
// for(var i=num1;i<=num2;i++){
//     document.write(i+"<br>")
  
// }
// count()
////////// 8th question
// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(x) {
//     return x * x;
//   }
//   var baseSquared = calculateSquare(base);
//   var perpendicularSquared = calculateSquare(perpendicular);
//   var hypotenuseSquared = baseSquared + perpendicularSquared;
//   var hypotenuse = Math.sqrt(hypotenuseSquared);
//   return hypotenuse;
// }
// var hypotenuse = calculateHypotenuse(3, 4);
// console.log(hypotenuse); 



//////////////9th question


// function calculateRectangleArea(width, height) {
//    width * height;
// }

// ///////// part 1
// let area = calculateRectangleArea(10, 5);
// console.log(area);

// function calculateRectangleArea(width, height) {
//    width * height;
// }

// ////////// part 2
// let w = 10;
// let h = 5;
// let are = calculateRectangleArea(w, h);
// console.log(are);


// /////////////////////  11th question
// function cap(str){
//     var con=str.split(" ");
//     for( var i=0; i<con.length;i++){

//      var fond=con[i];
//      con[i]=fond.charAt(0).toUpperCase()+fond.slice(1)  


//     }
//     return con.join(" ")
// }

// var str="faiz naeem junaid "
// var fun=cap(str)
// console.log(fun);