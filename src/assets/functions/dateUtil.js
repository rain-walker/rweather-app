export const dateConverter=(UNIX_timestamp)=>{
    var a = new Date(UNIX_timestamp * 1000);
    var months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = months[a.getMonth()];
    var date = a.getDate();
    var day=dayNames[a.getUTCDay()]
    var date1 = day + ' ' + date + ' ' + month;
    return date1;
  }
  export const timeConverter=(UNIX_timestamp)=>{
    var a = new Date(UNIX_timestamp * 1000);
    var hr = a.getHours()
    var min = a.getMinutes();
    var time =hr + ":" + min
    return time;
  }
