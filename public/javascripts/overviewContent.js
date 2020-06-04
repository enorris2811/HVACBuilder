function getOverviewContent() {
    var topNode = document.getElementById('overviewContent');
    var projects = sessionStorage.getItem('projects');

    var units = sessionStorage.getItem('units');
    var link = "";
    link = getLink();
    console.log(link);
    var p, g, u;
    if (link.indexOf('project') != -1) {
        p = document.getElementById('projectSlice').textContent;
        console.log(p);

        if (link.indexOf('unit') != -1) {
            var unit = getUnit();
            console.log(unit);
            var model;
            var tabldHTML = "<div> <table class='table' id='overviewTable'> <tr> <th>Name</th> <th>Size</th> <th>Controller Type</th> <th>Unit Type</th> </tr>  </table> </div>";
            topNode.innerHTML = tabldHTML;
            var tableNode = document.getElementById('overviewTable');
            var tempNode = document.createElement('tr');
            tableNode.appendChild(tempNode);
            var td = document.createElement('td');
            td.innerText = unit.name;
            tempNode.appendChild(td);
            td = document.createElement('td');
            td.innerText = unit.size;
            tempNode.appendChild(td);
            td = document.createElement('td');
            td.innerText = unit.controller;
            tempNode.appendChild(td);
            td = document.createElement('td');
            td.innerText = unit.type;
            tempNode.appendChild(td);
            if (unit.model != undefined) {
                model = JSON.parse(unit.model);
            }
            var tempDiv = document.createElement('div');
            tempDiv.setAttribute('id', 'equipmentListDiv');
            topNode.appendChild(tempDiv);
            var tempUL = document.createElement('ul');
            tempUL.className = 'list-group';
            tempUL.innerText = 'Equipment List';
            tempDiv.appendChild(tempUL);
            console.log(model);
            for (x in model) {
                var ele = model[x];
                console.log(ele);
                for (y in ele) {
                    var equip = ele[y];
                    console.log(y);
                    if (y != 'none') {
                        // console.log(equip);
                        if (equip.isUsed == true) {
                            console.log('made it here!')
                            var tempLI = document.createElement('li');
                            tempLI.innerText = x;
                            tempUL.appendChild(tempLI);
                            var nextUL = document.createElement('ul');
                            tempLI.appendChild(nextUL);
                            tempLI = document.createElement('li');
                            tempLI.innerText = y;
                            nextUL.appendChild(tempLI);
                        }
                    }
                }
            }


        }

    }
    



}