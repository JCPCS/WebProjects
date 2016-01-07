var fs = require('fs');
var path = require('path');

module.exports = function (app) {
    app.get('/api/projects', function (req, res) {
        var directories = getDirectories('./www');

        res.send(directories);
    });
};

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(function (file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}