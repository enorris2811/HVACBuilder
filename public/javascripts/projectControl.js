function addAHU() {
    console.log('clicked addAHU');
    var x = document.getElementById('AHUOptions');
    var type = x[x.selectedIndex].value;
    x = document.getElementById('ahuName');
    var name = x.value;
    x = document.getElementById('projectSelect');
    var project = x[x.selectedIndex].value;

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


    $.post('/addAHU', {
        name,
        type,
        project,
        size,
        user,
        manu

    }, function (data, status) {
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
        $.post('/newProject', {
            name,
            userID
        }, function (data, status) {
            updateSidebar(userID);
            alert('project created!!');
        });
    } else {
        alert('Please log In');
    }
}

function saveProject(project) {
    $.post('/saveProject', {
        project
    }, function (data, status) {
        console.log('save maybe');
        if (status == 400 || status == 200) {
            console.log(data);
        }
    });
}

function addNewGroup() {
    var groupName = document.getElementById('newGroupTextbox').value;
    var projectID = document.getElementById('newGroupProjectSelect').value;
    $.post('/addNewGroup', {
        groupName,
        projectID
    }, function (data, status) {
        alert('new group added');
    });

}

document.getElementById('newUnit').onclick = loadProjectSelect();

function loadProjectSelect() {
    console.log('clicked');
    var projects = JSON.parse(sessionStorage.getItem('projects'));
    var topNode = document.getElementById('projectSelect');
    var i = projects.length;
    console.log(i);
    for (var x = 0; x < projects.length; x++) {
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

    var groups = JSON.parse(sessionStorage.getItem('groups'));

    for (x in groups) {
        if (val == groups[x].project) {
            var newOption = document.createElement('option');
            newOption.value = groups[x]._id;
            newOption.textContent = groups[x].name;
            groupSelect.appendChild(newOption);
        }
    }


}

function removeProject(temp) {
    console.log(temp);
    $.post('/removeProject', {
        temp
    }, function (data, status) {
        alert('project deleted');
    });
}

function removeUnit(a) {

    console.log('clicked' + a);

    $.post('/removeUnit', {
        a
    }, function (data, status) {
        alert('unit deleted');
    });
}