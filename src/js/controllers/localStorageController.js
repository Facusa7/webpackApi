import customLocalStorage from "../utils/localStorage";
import peopleModel from '../models/peopleModel.js';
import tableDesigner from "../utils/tableDesigner.js";
import * as constants from '../models/constants.js'

function localStorageController() {
    var people = new peopleModel();
    var myLocalStorage = new customLocalStorage();
    var tableDesignerObject = new tableDesigner();

    var list = myLocalStorage.getLocalList(constants.STORAGE_KEY);

    for (var index = 0; index < list.length; index++) {
        tableDesignerObject.showRow(list[index], 'tableBody', constants.DELETE, people.deleteCharacter);        
    }
}

export default localStorageController;