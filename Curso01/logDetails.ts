// type alias
type Uid = number | string | undefined

function logDetails(uid: Uid, user: string) {
    console.log(`A product with ${uid} has a title as ${user}.`);    
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}.`);
}

type Platform = 'Windows' | 'Linux' | 'Mac Os'

function renderPlatform(platform: Platform) {
    return platform
}

renderPlatform('Linux')

logDetails(123, "sapato");
logDetails("123", "sapato");

logInfo(123, "Willian");
logInfo("123", "willian");