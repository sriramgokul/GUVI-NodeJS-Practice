console.log("Working");

function Calculation(num1,num2,operation){
    switch(operation){
        case "Add":
            return console.log(num1 + num2);
            case "Sub":
                return console.log(num1 - num2);
                case "mul":
                    return console.log(num1 * num2)
                    default:
                        console.log("Please enter the correct input")
    }

}
Calculation(45,83,"Adda");
console.log("Arguments", process.argv)