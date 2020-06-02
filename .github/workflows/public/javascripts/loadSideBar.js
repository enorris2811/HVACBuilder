
//updateSidebar();

function updateSidebar() {
    var topNode = document.getElementById('sidebar');
    
    var x = topNode.childElementCount;
    for(var i = 0;i< x; i++){
        topNode.lastChild.remove();
    }

    var projects = JSON.parse(sessionStorage.getItem('projects'));

    var groups = JSON.parse(sessionStorage.getItem('groups'));

    var units = JSON.parse(sessionStorage.getItem('units'));
    console.log(projects);
    console.log(groups);
    console.log(units);
    var topNode = document.getElementById('sidebar');
    var newNode = document.createElement('ul');
    newNode.className = 'list-group nested';
    topNode.appendChild(newNode);
    while (projects.length > 0) {
        var tempProject = projects.shift();
        var newUL = addNewSideBarItem(null, null, tempProject, newNode);

        for (var x = 0; x < groups.length; x++) {
            var tempGroup = groups[x];
            if (tempGroup.project == tempProject._id) {
                var nextUL = addNewSideBarItem(tempProject.name, null, tempGroup, newUL);

                for (var y = 0; y < units.length; y++) {
                    var tempUnit = units[y];
                    if (tempUnit.group == tempGroup._id) {
                        var dump = addNewSideBarItem(tempGroup.name, tempProject.name, tempUnit, nextUL);
                    }
                }

            }

        }
    }
}

function addNewSideBarItem(name, name2, project, topNode) {
    var newListItem = document.createElement('li');
    
    topNode.appendChild(newListItem);
    var newA = document.createElement('a');
    newA.textContent = project.name;
    newListItem.appendChild(newA);
    newA.name = project.name;
    newA.id = project._id;
    newA.className = 'list-group-item';

    //newA.setAttribute('data-toggle', 'collapse');
    var newB = document.createElement('button');
    newB.textContent = 'Remove ' + project.name;
    newB.className = 'sidebarButton';
    var newUL = document.createElement('ul');
    if (name == null) {
        //  newA.setAttribute('data-target', '#' + project.name + 'List');
        newUL.name = project.name + 'List';
        newA.setAttribute('href', '/overview/project/' + project.name);
       newB.id = 'removeProject';
    } else {
        //  newA.setAttribute('data-target', '#' + name + project.name + 'List');
        newUL.name = name + project.name + 'List';
        newA.setAttribute('href', '/overview/project/' + name + '/group/' + project.name);
        
    }
    if (name2 != null) {
        newA.setAttribute('href', '/overview/project/' + name2 + '/group/' + name + '/unit/' + project.name);
        newB.id = 'removeUnit';
    }    

    
    newListItem.appendChild(newB);
    newUL.className = 'nested';

    newListItem.appendChild(newUL);
    return newUL;
}


