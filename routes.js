var fs = require('fs');
var path = require('path');
var _ = require('lodash');

module.exports = function (app) {
    app.get('/api/projects', function (req, res) {
        var directories = getDirectories('./www');
        
        _.remove(directories, function(directory){
           return directory === 'app'; 
        });

        res.send(directories);
    });
};

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(function (file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}