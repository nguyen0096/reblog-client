const fs = require('fs');
const path = require('path');

const getAliases = (srcDir) => {
    const folders = fs.readdirSync(
        path.resolve(process.cwd(), srcDir),
        {
            withFileTypes: true,
        }
    ).filter((dirent) => dirent.isDirectory());
    
    const aliasObj = {};

    folders.forEach((dirent) => {
        aliasObj[dirent.name] = path.resolve(process.cwd(), srcDir, dirent.name);
    })

    return aliasObj;
}

module.exports = { getAliases }