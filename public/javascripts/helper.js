function getLink(){
    var tempP = document.getElementById('projectSlice');
    var link ="";
    if(tempP != null){
        link =  '/project/'+tempP.innerText;
        var tempG = document.getElementById('groupSlice');

        
        if(tempG != null){
            link = link + '/group/'+tempG.innerText;
            var tempU = document.getElementById('unitSlice');
            if(tempU != null){
                link = link +'/unit/'+ tempU.innerText;
            }
            
        }
    }else{
        return "";
    }

    return link;
}
function helper(user){
    var temp = document.getElementById('loginLink');
        temp.textContent = user;
        temp = document.getElementById('optionsLink');
        var link = getLink();
        if(link != false){
            temp.setAttribute('href','/options'+link);
            temp = document.getElementById('pointsLink');
            temp.setAttribute('href','/points'+link);
            temp = document.getElementById('sequenceLink');
            temp.setAttribute('href','/sequence'+link);
            temp = document.getElementById('overviewLink');
            temp.setAttribute('href','/overview'+link);

        }

        
        var topNode = document.getElementById('navbar');
        var newNode = document.createElement('li');
        var newButton = document.createElement('a');
        newNode.className = 'nav-item';
        topNode.appendChild(newNode);

        newButton.setAttribute('onclick', 'logOut()');
        newButton.textContent = 'LogOut';
        newButton.className = 'btn btn-default btn-rounded mb-4';
        newNode.appendChild(newButton);
}

function updateSession(p,g,u) {
    getUserData(sessionStorage.getItem('userID'));
    
}
function getUserData(userID) {
    var id;
    $.post('/getProjects', { userID }, function (data, status) {
        var projects = data.projects;
        
        console.log(projects[0]);
        console.log(data);
        var id = projects[0]._id;
        console.log(id);
        sessionStorage.setItem('projects', JSON.stringify(projects));
        $.post('/getGroups', { id }, function (data, status) {
            sessionStorage.setItem('groups', JSON.stringify(data.list));
            console.log(data);
        });
        $.post('/getUnits', { id }, function (data, status) {
            console.log(data);
            sessionStorage.setItem('units', JSON.stringify(data.units));
        });
    });



    console.log(JSON.parse(sessionStorage.getItem('projects')));
    console.log(sessionStorage.getItem('groups'));
    console.log(sessionStorage.getItem('units'));
}