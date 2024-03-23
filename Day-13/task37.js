// Question 37: Large Shirts: Default values in make_shirt().
function make_Shirts(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "Learning Typescript is a fun"; }
    console.log("The ".concat(size.toLowerCase(), " size shir with a message ").concat(text.toUpperCase(), " printed on it."));
}
// make_Shirts("xSmall" , "TypeScript is LaV");
make_Shirts();
make_Shirts("Medium");
make_Shirts("small", "My fav Programming Language");
