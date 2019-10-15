// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    let status = document.getElementById("flightStatus");    
    let background = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let height = Number(shuttleHeight.innerHTML);
    let image = document.getElementById("rocket");

    let topLimit = 285;
    let bottomLimit = -50;
    let rightLimit = 570;
    let leftLimit = -40;

    let initialBottom = "-5px";
    let initialLeft = "260px";
        
    image.style.bottom = initialBottom;
    image.style.left = initialLeft;
    
    let move = 10;
    
    let takeoffButton = document.getElementById("takeoff");
    takeoffButton.addEventListener("click", function (event) {
        let response = window.confirm("Please confirm that the shuttle is ready for takeoff.");
        if (response) {
            shuttleHeight = document.getElementById("spaceShuttleHeight");
            status.innerHTML="Shuttle in flight.";
            background.style.backgroundColor = "blue";
            height = height + 10000;
            shuttleHeight.innerHTML = height;
            image.style.bottom = `${Number(initialBottom.replace("px","")) + move}px`;
            image.style.left = initialLeft;
        };
    });
    let landingButton = document.getElementById("landing");
    landingButton.addEventListener("click", function (event) {
        window.alert("The shuttle is landing.  Landing gear engaged.");
        status.innerHTML="The shuttle has landed.";
        background.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        height = 0;
        image.style.bottom = initialBottom;
        image.style.left = initialLeft;
    });
    let abortMissionButton = document.getElementById("missionAbort");
    abortMissionButton.addEventListener("click", function (event) {
        let response = window.confirm("Please confirm that you would like to abort the mission.");
        if (response) {
            status.innerHTML="Mission aborted.";
            background.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            height = 0;
            image.style.bottom = initialBottom;
            image.style.left = initialLeft;
        }
    })
    let upButton = document.getElementById("moveUp");
    upButton.addEventListener("click", function (event) {
        let current = image.style.bottom;
        if ((Number(current.replace("px","")) + move) < topLimit) {
        image.style.bottom = `${Number(current.replace("px","")) + move}px`;
        } else {
            image.style.bottom = `${bottomLimit}px`;
        };
        height = height + 10000;
        shuttleHeight.innerHTML = height;       
    });
    let downButton = document.getElementById("moveDown");
    downButton.addEventListener("click", function (event) {
        let current = image.style.bottom;
        if ((height - 10000) >= 0) {
            if ((Number(current.replace("px","")) - move) > bottomLimit) {
                image.style.bottom = `${Number(current.replace("px","")) - move}px`;
            } else {
                image.style.bottom = `${topLimit}px`;
            }; 
            height = height - 10000;
            shuttleHeight.innerHTML = height;
        } else {
            height = 0;
            shuttleHeight.innerHTML = height;
        };                  
    });
    let rightButton = document.getElementById("moveRight");
    rightButton.addEventListener("click", function (event) {
        let current = image.style.left;
        if ((Number(current.replace("px","")) + move) < rightLimit) {
        image.style.left = `${Number(current.replace("px","")) + move}px`;
        } else {
            image.style.left = `${leftLimit}px`;
        };       
    });
    let leftButton = document.getElementById("moveLeft");
    leftButton.addEventListener("click", function (event) {
        let current = image.style.left;
        if ((Number(current.replace("px","")) - move) > leftLimit) {
        image.style.left = `${Number(current.replace("px","")) - move}px`;
        } else {
            image.style.left = `${rightLimit}px`;
        };       
    });


});
