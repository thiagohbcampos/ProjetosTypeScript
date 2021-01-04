interface Game{
    title: string;
    description: string;
    readonly genre: string;
    platform?: string[];
    getSimilars?: (title: string) => void;
}

const tlou: Game = {
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    },
};

console.log(tlou.genre);
if(tlou.getSimilars){
tlou.getSimilars(tlou.title);
}

interface DLC extends Game {
    originalGame: Game;
    newContent: string[];
}

const leftbehing: DLC = {
    title: "The Last of US - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characters"],
};

class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;

    constructor(title: string, description: string, genre: string){
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
}