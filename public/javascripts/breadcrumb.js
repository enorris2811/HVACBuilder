function getURL(url) {
 
    var iProject = url.indexOf('project');
    var iGroup = url.indexOf('group');
    var iUnit = url.indexOf('unit');
    var projectName;
    var groupName;
    var unitName;
    if (iProject != -1) {
        //get project name
        if (iGroup != -1) {
            //get group name
            if (iUnit != -1) {
                //get unit name;
                var i = url.lastIndexOf('/');
                i++;
                unitName = url.substring(i, url.length);
                i = i - 6;
                var g = iGroup + 6;
                groupName = url.substring(g, iUnit - 1);
                var p = iProject + 8;
                projectName = url.substring(p, iGroup - 1);
                console.log(unitName, groupName, projectName);
                breadCrumb(projectName, groupName, unitName);
            } else {
                var i = iGroup + 6;
                groupName = url.substring(i, url.length);
                var p = iProject + 8;
                projectName = url.substring(p, iGroup - 1);
                console.log(groupName, projectName);
                breadCrumb(projectName, groupName, null);
            }
        } else {
            var i = iProject + 8;
            projectName = url.substring(i, url.length);
            console.log(projectName);
            breadCrumb(projectName, null, null);
        }
    } else {
        console.log('no project!!');
    }
}

function breadCrumb(p, g, u) {
    var tempNode = document.createElement('li');
    tempNode.className = 'breadcrumb-item';
    var topNode = document.getElementById('breadcrumb');
    topNode.appendChild(tempNode);
    tempNode.textContent = p;
    tempNode.id = 'projectSlice';
    if (g != null) {
        tempNode = document.createElement('li');
        tempNode.className = 'breadcrumb-item';
        topNode.appendChild(tempNode);
        tempNode.textContent = g;
        tempNode.id = 'groupSlice';
        if (u != null) {
            tempNode = document.createElement('li');
            tempNode.className = 'breadcrumb-item';
            topNode.appendChild(tempNode);
            tempNode.textContent = u;
            tempNode.id = 'unitSlice';
        }
    }
}