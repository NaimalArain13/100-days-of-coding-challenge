// Question 37: Large Shirts: Default values in make_shirt().

function make_Shirts(size:string="Large", text:string = "Learning Typescript is a fun"){
    
    console.log(`The ${size.toLowerCase()} size shir with a message ${text.toUpperCase()} printed on it.`);
}

// make_Shirts("xSmall" , "TypeScript is LaV");
make_Shirts()
make_Shirts("Medium" );
make_Shirts("small" , "My fav Programming Language")