const time = document.getElementById("date");
function updateTime(){
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();
    let day = days[today.getDay()];
    let month = months[today.getMonth()];
    let date = today.getDate();
    let hr = today.getHours();
    let min = today.getMinutes();
    let period = "AM";
    if(min<10)  min = '0'+min;
    if(hr<12) period = "AM";
    else{
        period = "PM";
        if(hr>12) hr-=12;
    }
    if(hr<10) hr = '0'+hr;
    if(date<10) date = '0'+date;
    let modification = `${day} | ${month} ${date} | ${hr}:${min} ${period}`;
    time.innerHTML = modification;
}

//for making our time is up to date everytime without refreshing the content
window.setInterval("updateTime()", 1);  

