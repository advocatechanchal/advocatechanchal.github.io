'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderAssets() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/assets');
    const destPath = upath.resolve(upath.dirname(__filename), '../docs/.');
    
    sh.cp('-R', sourcePath, destPath);
    
    // Copy CNAME file if it exists
    const cnamePath = upath.resolve(upath.dirname(__filename), '../src/CNAME');
    if (sh.test('-f', cnamePath)) {
        sh.cp(cnamePath, upath.resolve(upath.dirname(__filename), '../docs/CNAME'));
    }
};