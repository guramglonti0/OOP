function Car(cName, cMarka, cYear) { 
    this.model=cName
    this.marka=cMarka 
    this.year=cYear 
    // this.carInfo=function() {
    //     document.write("მოდელი" +  this.model + "გამოშვების წელი" + this.yaer)
    // }
} 
function Person (pName, pAge){
    this.name=pName 
    this.age=pAge 
    this.ownsCar=function(car){
        document.write(" " + "ჰყავს"  + " " + car.model + " "  + car.marka + " " + car.year)
    } 
    this.displayInfo=function(){
        document.write( this.age + " " + "წლის" + " " + this.name ) 
    }  
}  

var bill = new Person ("ბილი  პატარაა და არ ჰყავს მანქანა " , 11) 
bill.displayInfo() 

var tom = new Person ("ჯემოს", 18)  
tom.displayInfo() 

var benve = new Car ("ბენვე", "ტროიკა", 1999) 
tom.ownsCar(benve)