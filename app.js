// Q1=====================
// let date = new Date()
// document.write(date)
// Q2=====================
// let monthNames = ["january","february","march","april","may","june","july","august","september","october","november","december"]
// let today = new Date()
//  let month = monthNames[today.getMonth()]
//  document.write("Current month :" + month)
// Q3=====================
// let dayNames = ["sun","mon","tues","wed","thu","fri","sat"]
// let now = new Date()
// let day =  dayNames[now.getDay()]
// document.write("Today is :" + day)

// Q4=====================
// let dayNames = ["sun","mon","tues","wed","thu","fri","sat"]
// let date = new Date()
// let days = dayNames[date.getDay()] 
// if(days === "sat" || days ==="sun"){
// alert("It's a fun day!")
// }else{
//     alert('working Days')
// }
// Q5=====================
// let date = new Date()
// let dateOn = date.getDate()
// console.log(dateOn)
// if(dateOn <16){
// alert('First fifteen days of the month')
// }else{
//     alert('Last days of the month')
// }
// Q6 =====================
// let currentDate = new Date();
// let time = currentDate.getTime();
// let merge = time/(1000*60);
// console.log(merge)
// document.write("currentDate" +currentDate+" <br>" )
// document.write("milisec" +time +" <br>" )
// document.write("minutes " +merge+" <br>" )
// Q7 =====================
// let date = new Date();
// let hours = date.getHours()
// let daytime = "AM"
// console.log(hours)
// if(hours > 12){
// hours = hours -12
// daytime = "PM"
// }
// console.log(hours + " " + daytime)
//Q8  ================
// let lastDay = new Date("Dec 31,2020")
// console.log("laterDate of Decmber : "+ lastDay)

//Q9  ================
// let ramdan = new Date("June 18, 2015")
// let currentDate = new Date()
// let diff =  currentDate-ramdan 
// let ans = Math.floor( diff / (1000* 60* 60* 24))
// alert("Number of days passed since 1st Ramadan: " + ans);
//Q10 ================
// let nowDate = new Date();
// let begOf2015 = new Date("2015 12, 5"); 
// let secElapsed = Math.floor((nowDate - begOf2015) / 1000);
// document.write("On refrence date "+ begOf2015+", " + secElapsed + " seconds had passed since begnning of 2015 ");
 //Q11 ================
// let hoursAgo = 1;
// let currentDate = new Date();
// console.log("Current date and time is: " + currentDate);
// let HoursWas = new Date(currentDate);
// HoursWas.setHours(currentDate.getHours() - HoursWas);
// console.log(`${HoursWas} hours ago was: ${HoursWas}`);
//Q12 ================
// let currentDate = new Date();
// console.log("Current date and time is: " + currentDate);
// let oneHunYearsAgo = new Date(currentDate);
// oneHunYearsAgo.setFullYear(currentDate.getFullYear() - 100);
// console.log("100 years ago was: " + oneHunYearsAgo);
//Q13 ================
// let now = new Date();
// let cyear = now.getFullYear();
// console.log("curr year " + cyear)
// let user = new Date(prompt('Enter your DOB'));
// let userYear = user.getFullYear();
// console.log("your birth year " + userYear)
// let diff = cyear - userYear;
// console.log("your age " + diff)
//Q14 ================
    // let cusName = "Abc";
    // let curMonth = "February";
    // let numOfUnits = 410;
    // let charPerUnit = 16;
    // let dueDate = new Date("2023-12-3"); 
    // let netAmountPay = (numOfUnits * charPerUnit).toFixed(2);
    // let currentDate = new Date();
    // let isAfterDueDate = currentDate > dueDate;
    // let latePayCharg = isAfterDueDate ? (netAmountPay * 0.1).toFixed(2) : 0;
    // let grossAmouPay = (parseFloat(netAmountPay) + parseFloat(latePayCharg)).toFixed(2);
    // document.write("<h2>K-Electric Bill</h2>");
    // document.write("<p>Customer Name: " + cusName + "</p>");
    // document.write("<p>Current Month: " + curMonth + "</p>");
    // document.write("<p>Number of Units: " + numOfUnits + "</p>");
    // document.write("<p>Charges per Unit: $" + charPerUnit + "</p>");
    // document.write("<p>Net Amount Payable (within Due Date): $" + netAmountPay + "</p>");

    // if (isAfterDueDate) {
    //     document.write("<p>Late Payment Surcharge: $" + latePayCharg + "</p>");
    //     document.write("<p>Gross Amount Payable (after Due Date): $" + grossAmouPay + "</p>");
    // }



// ========= Assignment completed








