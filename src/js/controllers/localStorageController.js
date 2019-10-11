import { setLocalList, getLocalList } from "../utils/localStorage";
import { showRow } from "../utils/designRows.js";
import * as constants from '../models/constants.js'

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

function localStorageController() {
    var list = getLocalList(constants.STORAGE_KEY);
    for (var index = 0; index < list.length; index++) {
        showRow(list[index], 'tableBody', 'Eliminar', deleteCharacter);        
    }
}

export default localStorageController;