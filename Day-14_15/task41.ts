// Question 41: Magicians: Display magician names from an array. 


export let magician_names:string[] = [
    "Harry Houdini",
    "Criss Angel",
    "David Blaine",
    "M.Ejaz Mughal"
];

function show_magicians(){
    for(let i = 0; i < magician_names.length; i++){
        console.log(magician_names[i]);
    }
}
