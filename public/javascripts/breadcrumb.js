function getURL(url) {

    var iProject = url.indexOf('project');

    var iUnit = url.indexOf('unit');
    var projectName;
    var groupName;
    var unitName;
    if (iProject != -1) {
        //get project name
        if (iUnit != -1) {
            //get unit name;
            var i = url.lastIndexOf('/');
            i++;
            unitName = url.substring(i, url.length);
            i = i - 6;
            
            var p = iProject + 8;
            projectName = url.substring(p, i);
            console.log(unitName, projectName);
            breadCrumb(projectName, unitName);
            return true;
        } else {
            var i = iProject + 8;
            projectName = url.substring(i, url.length);
            console.log(projectName);
            breadCrumb(projectName, null);
            return false;
        }
    } else {
        console.log('no project!!');
        return false;
    }
}

function breadCrumb(p, u) {
    var tempNode = document.createElement('li');
    tempNode.className = 'breadcrumb-item';
    var topNode = document.getElementById('breadcrumb');
    topNode.appendChild(tempNode);
    tempNode.textContent = p;
    tempNode.id = 'projectSlice';

    if (u != null) {
        tempNode = document.createElement('li');
        tempNode.className = 'breadcrumb-item';
        topNode.appendChild(tempNode);
        tempNode.textContent = u;
        tempNode.id = 'unitSlice';
    }
}