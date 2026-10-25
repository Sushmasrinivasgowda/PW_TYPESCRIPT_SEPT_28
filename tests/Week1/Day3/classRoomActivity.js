const browserVersion = "Chrome";
function getBrowserVersion(){
    if(browserVersion === "Chrome") 
    {
        var browserVersion = "Edge"; //
        // let browserVersion = "Edge"; 

        console.log("The Browser Version is inside block",browserVersion)
    }
}
getBrowserVersion()
console.log("The Browser Version is outside block",browserVersion)
