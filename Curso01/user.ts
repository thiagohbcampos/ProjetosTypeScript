// accountInfo
//charInfo
// PlayerInfo

type AccountInfo = {
    id: number | string;
    name: string;
    email?: string;
}

const account: AccountInfo = {
    id: 123,
    name: "Willian",
}

type CharInfo = {
    nickname: string;
    level: number;
}

const char: CharInfo = {
    nickname: "willjusten",
    level: 100,
}

type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: 123,
    nickname: "willjusten",
    name: "willian",
    level: 100,
};
