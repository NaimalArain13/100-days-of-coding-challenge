//Classes Static Members

//Static Members

class User {
    public static generateRandomId : number =  Math.floor(Math.random()* 50 )

    public static add(number1 : number ,number2 : number ){
        return number1 +  number2
    }
    public static sub(number1 : number ,number2 : number ){
        return number1 - number2
    }
    
    
}

console.log(User.generateRandomId);
console.log(User.add(2 ,3 ));
console.log(User.sub(5 ,3 ));

