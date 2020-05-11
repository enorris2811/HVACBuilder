
function getUnit() {
    var tempP = document.getElementById('projectSlice').innerText;
    var tempG = document.getElementById('groupSlice').innerText;
    var tempU = document.getElementById('unitSlice').innerText;
    var p = JSON.parse(sessionStorage.getItem('projects'));
    var g = JSON.parse(sessionStorage.getItem('gropus'));
    var u = JSON.parse(sessionStorage.getItem('units'));
    for (x in p) {
        if (tempP == p[x].name) {
            var id = p[x]._id;
            for (i in u) {
                if (tempU == u[i].name) {
                    if (id == u[i].project) {
                        return u[i];
                    }
                }
            }
        }
    }
}