// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    let status = document.getElementById("flightStatus");    
    let background = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let height = Number(shuttleHeight.innerHTML);
    let image = document.getElementById("rocket");
    console.log(image.style.top);
    console.log(image.style.bottom);
    console.log(image.style.left);
    console.log(image.style.right);
    console.log(image.style.current);
    
    image.style.bottom = "0px";
    image.style.left = "0px";
    // image.style.top = "200px";
    // image.style.right = "100px";
    
    console.log(image.style.bottom);
    console.log(image.style.left);
    
    // image.style.top = "200px";
    let move = 10;
    let x = 0;
    let rocketXposition = 0;
    let rocketYposition = 0;
    let takeoffButton = document.getElementById("takeoff");
    takeoffButton.addEventListener("click", function (event) {
        let response = window.confirm("Please confirm that the shuttle is ready for takeoff.");
        if (response) {
            shuttleHeight = document.getElementById("spaceShuttleHeight");
            status.innerHTML="Shuttle in flight.";
            background.style.backgroundColor = "blue";
            height = height + 10000;
            shuttleHeight.innerHTML = height;
        };
    });
    let landingButton = document.getElementById("landing");
    landingButton.addEventListener("click", function (event) {
        window.alert("The shuttle is landing.  Landing gear engaged.");
        status.innerHTML="The shuttle has landed.";
        background.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        height = 0;
    });
    let abortMissionButton = document.getElementById("missionAbort");
    abortMissionButton.addEventListener("click", function (event) {
        let response = window.confirm("Please confirm that you would like to abort the mission.");
        if (response) {
            status.innerHTML="Mission aborted.";
            background.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            height = 0;
        }
    })
    let upButton = document.getElementById("moveUp");
    upButton.addEventListener("click", function (event) {
        rocket.style.bottom = document.getElementById("rocket").style.bottom;
        console.log(rocket.style.bottom);

        // rocketYposition = (10);
        // rocketYposition.style.top = rocketYposition + "px"; 
        // let position = document.getElementById("rocket").offsetTop;
        // if (position <= 0) {
        //     document.getElementById("rocket").style.top = "325px";
        //     x = 325;
        // } else if (postion <=10) {
        //     document.getElementById("rocket").style.top = "0px";
        //     x = 0;
        // } else {
        //     x = x - move;
        //     document.getElementById("rocket").style.top = x + "px";
        // }
    });

});
