"use strict";
function logDetails(uid, user) {
    console.log("A product with " + uid + " has a title as " + user + ".");
}
function logInfo(uid, user) {
    console.log("An user with " + uid + " has a name as " + user + ".");
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform('Linux');
logDetails(123, "sapato");
logDetails("123", "sapato");
logInfo(123, "Willian");
logInfo("123", "willian");
