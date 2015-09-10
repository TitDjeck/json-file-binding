var util = require("util"),
    fs = require("fs"),
    extend = require("extend");

module.exports = function (filePath, data, autoSave) {
        
    if (fs.existsSync(filePath)) {
        extend(true, data, JSON.parse(fs.readFileSync(filePath, 'utf8')));
    }
    
    if (autoSave && (util.isArray(data) || util.isObject(data))) {
        Object.observe(data, function (changes) {
            fs.writeFile(filePath, JSON.stringify(data), 'utf8', function (err) {
                if (err) console.log(util.format("json-file-binding autoSave error : %j", err));
            });
        });
    }
    
    process.on('SIGINT', function () {
        process.exit();
    });

    process.on("exit", function () {
        fs.writeFileSync(filePath, JSON.stringify(data), 'utf8');    
    });
};
