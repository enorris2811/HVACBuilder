function addAHU() {
    console.log('clicked addAHU');
    var x = document.getElementById('AHUOptions');
    var type = x[x.selectedIndex].value;
    x = document.getElementById('ahuName');
    var name = x.value;
    x = document.getElementById('projectSelect');
    var project = x[x.selectedIndex].value;
    x = document.getElementById('groupSelect');
    var group = x[x.selectedIndex].value;
    x = document.getElementById('ahuSize');
    var size = x[x.selectedIndex].value;
    x = document.getElementById('controllerSelect');
    var manu = x[x.selectedIndex].value;
    var temp = sessionStorage.getItem('user');
    var user, userID;

    if (temp != undefined) {
        user = temp;
        userID = sessionStorage.getItem('userID');

    }
    console.log(manu);


    $.post('/addAHU', { name, type, project, size, user, manu, group }, function (data, status) {
        //sessionStorage.clear();
        getUserData(userID);
        updateSidebar(userID);
        alert('New Unit Added');
    });



}


function createNewProject() {
    console.log('clicked!!');
    var ele = document.getElementById('newProjectTextbox').value;
    console.log(ele);
    var name = document.getElementById('newProjectTextbox').value;
    var userID = sessionStorage.getItem('userID');

    if (userID != undefined) {
        $.post('/newProject', { name, userID }, function (data, status) {
            updateSidebar(userID);
            alert('project created!!');
        });
    } else {
        alert('Please log In');
    }
}

function saveProject(project) {
    $.post('/saveProject', { project }, function (data, status) {
        console.log('save maybe');
        if (status == 400 || status == 200) {
            console.log(data);
        }
    });
}
function addNewGroup() {
    var groupName = document.getElementById('newGroupTextbox').value;
    var projectID = document.getElementById('newGroupProjectSelect').value;
    $.post('/addNewGroup', { groupName, projectID }, function (data, status) {
        alert('new group added');
    });

}


function loadProjectSelect(eleID, item) {

    var projects = JSON.parse(sessionStorage.getItem(item));
    var topNode = document.getElementById(eleID);

    for (x in projects) {
        console.log(projects[x]);
        var temp = document.createElement('option');
        temp.textContent = projects[x].name;
        temp.value = projects[x]._id;
        topNode.appendChild(temp);
    }

}

document.getElementById('projectSelect').onchange = function () {
    var groupSelect = document.getElementById('groupSelect');
    console.log('select changed');
    var val = this.options[this.selectedIndex].value;
    console.log(val);


    $.post('/getGroups', { id: val }, function (data, status) {
        var groups = data.list;
        for (x in groups) {
            var newOption = document.createElement('option');
            newOption.value = groups[x]._id;
            newOption.textContent = groups[x].name;
            groupSelect.appendChild(newOption);
        }
    });

}

function removeProject(){
    var p = document.getElementById('removeProjectSelect');
    var temp = p.options[p.selectedIndex].value;
    console.log(temp);
    $.post('/removeProject',{temp}, function(data, status){
        alert('project deleted');
    });
}

function removeGroup(){
    var p = document.getElementById('removeGroupSelect');
    var temp = p.options[p.selectedIndex].value;
    console.log(temp);
    $.post('/removeGroup',{temp}, function(data, status){
        alert('group deleted');
    });
}

function removeUnit(){
    var p = document.getElementById('removeUnitSelect');
    var temp = p.options[p.selectedIndex].value;
    console.log(temp);
    $.post('/removeUnit',{temp}, function(data, status){
        alert('unit deleted');
    });
}