//updateSidebar();

function updateSidebar() {
    var topNode = document.getElementById('sidebar');

    var x = topNode.childElementCount;
    for (var i = 0; i < x; i++) {
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
    if (projects.length != null) {
        while (projects.length > 0) {
            var tempProject = projects.shift();
            var newUL = addNewSideBarItem(null, tempProject, newNode);

            for (var y = 0; y < units.length; y++) {
                var tempUnit = units[y];
                if (tempUnit.project == tempProject._id) {
                    var dump = addNewSideBarItem(tempProject.name, tempUnit, newUL);
                }
            }
        }

    }

}

function addNewSideBarItem(name, project, topNode) {
    var newListItem = document.createElement('li');

    topNode.appendChild(newListItem);
    var newA = document.createElement('a');
    newA.textContent = project.name + " overview";
    newListItem.appendChild(newA);
    newA.name = project.name;
    console.log(project._id);
    newA.id = project._id;
    newA.className = 'list-group-item';


    var newB = document.createElement('a');
    newB.textContent = 'Remove ' + project.name;


    newB.id = project._id;

    var newC = document.createElement('a');
    newC.textContent = 'Configure ' + project.name;

    var newD = document.createElement('a');
    newD.textContent = 'Points ' + project.name;

    var newE = document.createElement('a');
    newE.textContent = 'Sequence ' + project.name;
    var newUL = document.createElement('ul');
    if (name == null) {
        //  newA.setAttribute('data-target', '#' + project.name + 'List');
        newUL.name = project.name + 'List';
        newA.setAttribute('href', '/overview/project/' + project.name);
        newB.setAttribute('onclick', 'removeProject(this.id)');

        var t = document.createElement('ul');
        t.className = 'nested';
        newA.appendChild(t);
        var l = document.createElement('li');
        t.appendChild(l);
        l.appendChild(newB);

    } else if (name != null) {
        newA.setAttribute('href', '/overview/project/' + name + '/unit/' + project.name);
        newB.setAttribute('onclick', 'removeUnit(this.id)');
        newC.setAttribute('href', '/options/project/'  + name + '/unit/' + project.name);
        newD.setAttribute('href', '/points/project/' + name +  '/unit/' + project.name);
        newE.setAttribute('href', '/sequence/project/'  + name + '/unit/' + project.name);
        var t = document.createElement('ul');
        t.className = 'nested';
        newA.appendChild(t);
        var l = document.createElement('li');
        t.appendChild(l);
        l.appendChild(newB);
        var l = document.createElement('li');
        t.appendChild(l);
        l.appendChild(newC);
        var l = document.createElement('li');
        t.appendChild(l);
        l.appendChild(newD);
        var l = document.createElement('li');
        t.appendChild(l);
        l.appendChild(newE);
    }


    newUL.className = 'nested';

    newListItem.appendChild(newUL);
    return newUL;
}