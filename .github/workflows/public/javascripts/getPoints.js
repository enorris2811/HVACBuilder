



function createPointsList(ahu) {
    var unit = getUnit();
    $.get('/pointsModel', function (data, status) {
        var points = data.points
        var hardPoint = points.hardware;
        var softPoint = points.software;
        var ele;
        var p = [];
        var s = [];
        console.log(ahu);
        for (ele in ahu) {


            var val = ahu[ele];


            var pointName = JSON.stringify(ele);
            var i;
            for (i in val) {

                var x = val[i];
                console.log(ele);
                if (i != 'none' || ele == 'remoteOccupancy') {

                    if (x.isUsed == true) {

                        var q = x.points;
                        s.push(x.sequence);
                        var z;

                        for (z in q) {

                            var pointName = q[z];
                            var temp;
                            for (temp in hardPoint) {
                                var wx = hardPoint[temp];
                                var wy = temp;
                                //console.log(wx);
                                if (pointName == wy) {
                                    //console.log("ANd AGAIN RIGHT HERE!!!");
                                    if (wx.isUsed == false) {
                                        wx.isUsed == true;
                                        p.push(pointName);

                                    }
                                }
                            }
                            var temp2;
                            for (temp2 in softPoint) {
                                var wx = softPoint[temp2];
                                var wy = temp2;
                                //console.log(wx);
                                if (pointName == wy) {
                                    //console.log("ANd AGAIN RIGHT HERE!!!");
                                    if (wx.isUsed == false) {
                                        wx.isUsed == true;
                                        p.push(pointName);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }


        console.log(p);
        console.log(s);
        unit.points = p;
        unit.sequence = s;
        unit.model = JSON.stringify(ahu);
        console.log(unit);
        var hmmm = JSON.stringify(unit);
        $.post('/updateUnitOptions', { 'unit':JSON.stringify(unit) }, function (data, status) {
            console.log(data);
            //sessionStorage.clear();
            getUserData(sessionStorage.getItem('userID'));
            //updateSidebar();
        });

    });

    console.log(unit);


}