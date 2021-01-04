// S => State
// T => Type
// K => Key
// V => Value
// E => Element

type numOrStr = number | string;

function useState <S extends numOrStr = string>() {
    let state: S;

    function getState(){
        return state;
    }

    function setState(newState: number){
        state = newState;
    }

    return { getState, setState };

}

const newState = useState();

newState.getState("foo");
console.log(newState.getState());

//newState.setState(123);
//console.log(newState.getState());