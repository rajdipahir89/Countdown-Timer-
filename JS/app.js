const endDate = "28 Feb 2030 10:33 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
const clock = () =>{


        const end = new Date(endDate);
        const now = new Date();
        const diff = (end-now)/1000;
       // console.log(diff);
        
        //if(diff < 0) return;

        if(diff>0)
        {
        //convert to days
        inputs[0].value=Math.floor(diff/3600/24);
        //convert to hours
        inputs[1].value=Math.floor(diff/3600)%24;
        //convert to Minuts
        inputs[2].value=Math.floor(diff/60)%60;
        //convert to sec
        inputs[3 ].value=Math.floor(diff)%60;
        
        }

}

// initial call
//clock()


/*
    1 days 24 hours
    1 hr = 60min
    60 min = 3600sec
*/

setInterval(() => {
    clock()
}, 1000);
