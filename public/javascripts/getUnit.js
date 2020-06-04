
function getUnit() {
    var tempP = document.getElementById('projectSlice').innerText;

    var tempU = document.getElementById('unitSlice').innerText;
    var p = JSON.parse(sessionStorage.getItem('projects'));

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

function getOptions(unit) {
    var model = JSON.parse(unit.model);
    console.log(model);
    var selects = document.getElementsByTagName('select');
    var checkboxes = document.getElementsByTagName('input');
    console.log(selects);
    console.log(checkboxes);
    if (model != undefined) {
        for (x in model) {
            var ele = model[x];
            console.log(x);
            for (y in ele) { 
                var equip = ele[y];
                //console.log(equip);
                if (equip.isUsed == true){
                  for(s in selects){
                      
                      if(x==selects[s].id){
                          var temp = document.getElementById(x);
                          var e = temp.length;
                          for(i=0;i<temp.length;i++){
                              if(y == temp[i].value){
                                  temp.selectedIndex = i;
                              }
                          }
                      }
                  }
                  for(c in checkboxes){
                      //console.log(checkboxes[c].id);
                      if(y == checkboxes[c].id){
                          var temp = document.getElementById(y);
                          console.log('checked');
                          temp.checked = true;
                      }
                  }
                    
                } 
            }
        }
    }
}