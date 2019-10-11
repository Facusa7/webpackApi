import { setLocalList, getLocalList } from '../utils/localStorage.js';
import * as constants from '../models/constants.js';

function saveCharacter(_character){
    var characterList = getLocalList(constants.STORAGE_KEY);
    characterList.push(_character);
    setLocalList(constants.STORAGE_KEY, characterList);
}

function characterIsAlreadySaved(_character){
    var characterList = getLocalList(constants.STORAGE_KEY);
    return characterList.find(character => character.name == _character.name);
}

function deleteCharacter(_character) {
    var list = getLocalList(constants.STORAGE_KEY);
    var positionToDelete = -1;
    
    for (var index = 0; index < list.length; index++) {
        if (list[index].name == _character.name) {
            positionToDelete = index;
        }        
    }
    
    if (positionToDelete != -1) {
        list.splice(positionToDelete, 1);
        setLocalList(constants.STORAGE_KEY, list);
    }
}

export { saveCharacter, characterIsAlreadySaved, deleteCharacter }