import customLocalStorage from '../utils/localStorage.js';
import * as constants from './constants.js';

function peopleModel() {

    var myLocalStorage = new customLocalStorage();

    this.saveCharacter = function (_character) {
        var characterList = myLocalStorage.getLocalList(constants.STORAGE_KEY);
        characterList.push(_character);
        myLocalStorage.setLocalList(constants.STORAGE_KEY, characterList);
    }

    this.isCharacterAlreadySaved = function (_character) {
        var characterList = myLocalStorage.getLocalList(constants.STORAGE_KEY);
        return characterList.find(character => character.name == _character.name);
    }

    this.deleteCharacter = function (_character) {
        var list = myLocalStorage.getLocalList(constants.STORAGE_KEY);
        var positionToDelete = -1;

        for (var index = 0; index < list.length; index++) {
            if (list[index].name == _character.name) {
                positionToDelete = index;
            }
        }

        if (positionToDelete != -1) {
            list.splice(positionToDelete, 1);
            myLocalStorage.setLocalList(constants.STORAGE_KEY, list);
        }
    }
}

export default peopleModel;