import peopleModel from '../models/peopleModel.js';
import dataManager from '../utils/dataManager.js';
import dataMapper from '../utils/dataMapper.js';
import tableDesigner from "../utils/tableDesigner.js";
import * as constants from '../models/constants.js';

function peopleController() {
    var people = new peopleModel();
    var dataManagerObject = new dataManager();
    var dataMapperObject = new dataMapper();
    var tableDesignerObject = new tableDesigner();

    function showResults(_peopleData) {
        if (_peopleData.results) {
            var results = _peopleData.results;

            for (var i = 0; i < results.length; i++) {

                var character = dataMapperObject.formatCharacter(results[i]);
                
                if (!people.isCharacterAlreadySaved(character)) {
                    tableDesignerObject.showRow(character, 'tableBody', constants.SAVE, people.saveCharacter);
                }
            }
        }

        $("#seeMore").on('click', function () {
            if (_peopleData.next) {
                dataManagerObject.getData(_peopleData.next, showResults, showError);
            } else {
                $(this).attr('disabled', true);
            }
        });
    }

    function showError(_error) {
        console.log(_error);
    }

    dataManagerObject.getData(constants.SWAPI_URL, showResults, showError);
}

export default peopleController