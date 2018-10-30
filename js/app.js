
(function () {
  loadJSON();

let jsondata = undefined;
//Loading json file
function loadJSON() {
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'json/data.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      jsondata = JSON.parse(xobj.responseText);
      getTeam();
    }
  };
  xobj.send(null);
}

//Availble team
function getTeam() {
  const body = document.getElementById("team");
  jsondata.map((val, i, data) => {
      return dataList(data[i].team, body);
    });
}

//carete html
function dataList(val, body) {
  if( Array.isArray(val)){
  val.forEach(iteam => {
  let options = document.createElement("option");
  options.setAttribute("value", iteam);
  body.appendChild(options);
 });
}else{
  let options = document.createElement("option");
  options.setAttribute("value", val);
  body.appendChild(options);
}
}
  let teameName = document.querySelector("#orgTeam");
  teameName.onblur = function(){
  let optionVal = false;
  let datalist = teameName.list;
  for (let i = 0; i < datalist.options.length; i++) {
    if (teameName.value.toUpperCase() === datalist.options[i].value.toUpperCase()) {
      optionVal = true;
      break;
    }
  }
  let emp = document.getElementById("orgEmployee");
  if (optionVal) {
    emp.removeAttribute("disabled");
   
      const ebody = document.getElementById("employee");
      ebody.innerHTML="";
      jsondata.forEach(team => {
        
        if(team.team.indexOf(teameName.value) > -1){
         dataList(team.employees, ebody);
        }
      });
  } else {
    console.log('Please select a valid value.');
    emp.setAttribute("disabled", true);
  }
  }

})();





