const packageB = require("npm-test-package-b");

module.exports = {
    "message": `From npm-test-package-b I got this message: ${packageB.message}`
};
