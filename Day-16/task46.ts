// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

// Explain & TIP: Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects.



const laptopspecs = {
    make: "HP",
    model: "HP spectre x360 Luxury 14T",
    year: 2001,
    describe: function method(){
        console.log(`The laptop "${laptopspecs.make}" with model "${laptopspecs.model}" is manufactured in year ${laptopspecs.year}`);
        
    }
}

laptopspecs.describe()