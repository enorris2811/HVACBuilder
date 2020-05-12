var project = require('../models/project.js');

var ahu = require('../models/ahu.js');
var group = require('../models/group.js');
var mongoose = require('mongoose').MongoClient;
var fs = require('fs');
var path = require('path');
var os = require('os');
//mongoose.connect('mongodb+srv://eric:hey12george@cluster0-16hbj.azure.mongodb.net/projects?retryWrites=true&w=majority');

exports.updateUnitOptions = function (req, res) {
    var unit = JSON.parse(req.body.unit);

    console.log(unit);
    var points = unit.points;
    // console.log(points);
    ahu.findOneAndUpdate({ '_id': unit._id }, { 'points': unit.points, 'sequence': unit.sequence,'model':unit.model }, { 'useFindAndModify': false }).exec(function (err, temp) {
        if (err) {
            console.log(err);
        } else {
            //temp.sequence = unit.sequence;
            //temp.points = unit.points;
            console.log(temp);
            res.json({ temp });
        }
    });


}
exports.get_unit_sequence = function (req, res) {
    res.sendFile(path.resolve('./public/sequence.html'));
}

exports.get_group_sequence = function (req, res) {
    res.sendFile(path.resolve('./public/sequence.html'));
}
exports.get_project_sequence = function (req, res) {
    res.sendFile(path.resolve('./public/sequence.html'));
}

exports.get_unit_points = function (req, res) {
    res.sendFile(path.resolve('./public/points.html'));
}

exports.get_group_points = function (req, res) {
    res.sendFile(path.resolve('./public/points.html'));
}
exports.get_project_points = function (req, res) {
    res.sendFile(path.resolve('./public/points.html'));
}
exports.get_overview = function (req, res) {
    res.sendFile(path.resolve('./public/overview.html'));
}
exports.get_unit_overview = function (req, res) {
    var projectName = req.params.project;
    var groupName = req.params.unit;
    var unitName = req.params.unit;
    console.log(req.params);
    res.sendFile(path.resolve('./public/overview.html'));
}

exports.get_project_overview = function (req, res) {

    console.log(req.params);
    res.sendFile(path.resolve('./public/overview.html'));

}

exports.get_group_overview = function (req, res) {
    console.log(req.params);
    res.sendFile(path.resolve('./public/overview.html'));

}
exports.add_new_group = function (req, res) {
    var tempGroupName = req.body.groupName;
    var tempProjectID = req.body.projectID;
    console.log(req.body);
    var tempGroup = new group({});
    tempGroup.name = tempGroupName;
    tempGroup.project = tempProjectID;
    console.log(tempGroup);
    tempGroup.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.json({ 'saved': true });
        }
    });
}
exports.create_project = function (req, res) {
    var temp = req.body.name;
    var tempUserID = req.body.userID;
    console.log(req.body);
    var tempGroup = new group({ name: 'floorOne' });
    var tempInstance = new project({ name: temp, groups: tempGroup, user: tempUserID });
    tempGroup.project = tempInstance;
    console.log(tempInstance);
    tempGroup.save(function (err) { if (err) console.log(err) });
    tempInstance.save(function (err) { if (err) console.log(err) });

    res.send('saved!');
}
exports.get_units = function (req, res) {
    console.log(req.body);
    var id = req.body.id;
    console.log(id);
    ahu.find({ 'project': id }).exec(function (err, units) {
        if (err) {
            console.log(err);
        } else {
            console.log(units);
            res.json({ units });
        }
    });
}

exports.add_ahu = function (req, res) {
    console.log(req.body);
    var name = req.body.name;
    var type = req.body.type;
    var projectTemp = req.body.project;
    var size = req.body.size;
    var conttroller = req.body.manu;
    var group = req.body.group;
    var tempInstance = new ahu({ name: name });
    tempInstance.type = type;
    tempInstance.project = projectTemp;
    tempInstance.size = size;
    tempInstance.controller = conttroller;
    tempInstance.group = group;
    
    tempInstance.save(function (err) { if (err) { console.log(err); } else { res.json({"auth":true }); } });

}
exports.find_ahu_all = function (req, res) {
    console.log(req.body);
    ahu.find({}, 'name').exec(function (err, list) {
        if (err) console.log(err);
        res.json({ list });
    })
}
exports.find_ahu_by_project = function (req, res) {
    console.log(req.body);
    var temp = req.body.project;
    ahu.find({ temp }, 'project').exec(function (err, list) {
        if (err) console.log(err);
        res.json({ list });
    });

}

exports.find_ahu_by_type = function (req, res) {
    console.log(req.body);
    var temp = req.body.type;
    ahu.find({ temp }, 'type').exec(function (err, list) {
        if (err) console.log(err);
        res.json({ list });
    })
}

exports.find_ahu_by_type_project = function (req, res) {
    console.log(req.body);
    var tempProject = req.body.project;
    var tempType = req.body.type;

}

exports.get_groups = function (req, res) {
    console.log('called get groups');
    var projectID = req.body.id;
    console.log(req.body);
    group.find({ project: projectID }).exec(function (err, list) {
        if (err) {
            console.log(err);
        } else {
            console.log(list)
            res.json({ list });
        }
    });
}

exports.get_projects = function (req, res) {
    console.log("called get Projects");
    project.find({}, 'name').exec(function (err, list) {
        if (err) console.log(err);
        console.log(list);
        res.json({ list });

    })
};

exports.save_project = function (req, res) {
    var temp = req.body;
    console.log(temp);
    // var project = JSON.parse(temp);
    if (temp != null) {
        var fileName = path.join(__dirname + '\\csv\\', project.name + '.csv');
        console.log(fileName);
    }
    res.send('Saved!');

};

exports.load_project = function (req, res) {
    var temp = req.body.userID;
    console.log(temp);

    project.find({ 'user': temp }, function (err, projects) {
        if (err) console.log(err);
        else {
            console.log(projects);
            res.json({ projects });
        }
    });
    console.log(project);
};

exports.get_all_groups = function (req, res) {
    group.find({}).exec(function (err, list) {
        if (err) {
            console.log(err);
        } else {
            res.json({ list });
        }
    })
};

exports.get_all_units = function (req, res) {
    ahu.find({}).exec(function (err, list) {
        if (err) {
            console.log(err);
        } else {
            res.json({ list });
        }
    })
}


exports.get_projects_login = function (req, res) {
    var temp = req.body.userID;
    console.log(temp);
    var p = [];
    var g = [];
    var u = [];
    project.find({ 'user': temp }, function (err, projects) {
        if (err) console.log(err);
        else {
            console.log(projects);
            p = projects;
            for (var x = 0; x < projects.length; x++) {

                group.find({ 'project': projects[x]._id }, function (err, groups) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('the results of the group query are:' + groups);

                        g.push(groups);

                    }
                });

                ahu.find({ 'project': projects[x]._id }).exec(function (err, units) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('the results of the units query are:' + units);

                        u.push(units);

                    }
                });
            }
            res.json({ 'projects': p, 'groups': g, 'units': u });
        }
    });

}


exports.get_project_options = function (req, res) {
    res.sendFile(path.resolve('./public/options.html'));
}
exports.get_group_options = function (req, res) {
    res.sendFile(path.resolve('./public/options.html'));
}
exports.get_unit_options = function (req, res) {
    res.sendFile(path.resolve('./public/options.html'));
}