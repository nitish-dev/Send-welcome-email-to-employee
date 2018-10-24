

const oReq = new XMLHttpRequest();
oReq.addEventListener("load", loadJSONData);
oReq.open("GET", "json/data.json");
oReq.send();
function loadJSONData() {
  let data = JSON.parse(this.responseText);
  getTeam(data);
}

function getTeam(list) {
  const body = document.getElementById("team");
  let teamData = list.map((val, i, list) => {
    return dataList(list[i].team, body);
  });
}



function dataList (val, body){
    let options = document.createElement("option");
    options.setAttribute("value", val);
    body.appendChild(options);
}

(function () {
  getTeam();
})();