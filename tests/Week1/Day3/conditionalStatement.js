// use if & else when you know the range conditions or if multile logical operater is required

let marks = 40

if (marks>80){
    console.log('Distinction');
}
else if(marks>60)
    {
    console.log('First class');
}
else if(marks<30){
    console.log("Failed")
}
else{
    console.log('Second Class')
}


//use switch when one variable can have many fixed values

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let alertType = "confirm"

switch(alertType){

    case "simple":
        console.log("simple alert");
        break
        case "confirm":
            console.log("confirm alert");
            break
            case "prompt":
                console.log('prompt alert');
                break
                default:
                    console.log('invalid alert');
}
