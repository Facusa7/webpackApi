import { getLocalList } from "../utils/localStorage";
import { deleteCharacter } from '../models/people.js'
import { showRow } from "../utils/designRows.js";
import * as constants from '../models/constants.js'

function localStorageController() {
    var list = getLocalList(constants.STORAGE_KEY);
    for (var index = 0; index < list.length; index++) {
        showRow(list[index], 'tableBody', 'Eliminar', deleteCharacter);        
    }
}

export default localStorageController;