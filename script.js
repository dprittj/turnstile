window.addEventListener("DOMContentLoaded", () => {

    const btns = document.querySelectorAll(".addsubtractbtn");

    const entryplus = document.getElementById("entry-plus");
    const entryminus = document.getElementById("entry-minus");
    const exitplus = document.getElementById("exit-plus");
    const exitminus = document.getElementById("exit-minus");
    const resetin = document.getElementById("reset-in");
    const resetout = document.getElementById("reset-out");
    const resetnow = document.getElementById("reset-current");
    const resetdaily = document.getElementById("reset-daily");
    
    const pEntry = document.getElementById("entry-num");
    const pExit = document.getElementById("exit-num");

    const totalcurrent = document.getElementById("current-guests");
    const totaldaily = document.getElementById("daily-guests");

    let totalin = 0;
    let totalout = 0;
    let totalnow = 0;
    let daily = 0;

    function current(){
        totalnow = totalin - totalout;

        if (totalnow < 0){
            totalnow = 0;
        }

        totalcurrent.innerText = totalnow;
        return totalnow;
    };

    entryplus.addEventListener("click", ()=>{
        totalin += 1;
        pEntry.innerText = totalin;
        daily += 1;

        current();
        totaldaily.innerText = daily;
        return totalin, totalnow;
    });

    entryminus.addEventListener("click", ()=>{
        totalin -= 1;
        pEntry.innerText = totalin;
        
        if (totalin < 0){
            totalin = 0;
            pEntry.innerText = totalin;
        }

        current();
        return totalin;
    });

    exitplus.addEventListener("click", ()=>{
        totalout += 1;
        pExit.innerText = totalout;

        current();
        return totalout, totalnow;
    });

    exitminus.addEventListener("click", ()=>{
        totalout -= 1;
        pExit.innerText = totalout;
        
        if (totalout < 0){
            totalout = 0;
            pExit.innerText = totalout;
        }

        current();
        return totalout;
    });

    resetin.addEventListener("click", ()=>{
        totalin = 0;
        pEntry.innerText = totalin;
        return totalin;
    });

    resetout.addEventListener("click", ()=>{
        totalout = 0;
        pExit.innerText = totalout;
        return totalout;
    });

    resetnow.addEventListener("click", ()=>{
        totalnow = 0;
        totalcurrent.innerText = totalnow;
        return totalnow;
    });

    resetdaily.addEventListener("click", ()=>{
        daily = 0;
        totaldaily.innerText = daily;
        return daily;
    });

    totalcurrent.innerText = totalnow;
    totaldaily.innerText = daily;

})