import { saveCharacter, characterIsAlreadySaved } from '../models/people.js';
import { getData } from '../utils/manageData.js';
import { showRow } from "../utils/designRows.js";
import * as constants from '../models/constants.js';

function showResults(_peopleData) {
    if (_peopleData.results) {
        var results = _peopleData.results;
        for (var i = 0; i < results.length; i++) {
            var character = results[i];
            if (!characterIsAlreadySaved(character)) {
                showRow(character, 'tableBody', 'Guardar', saveCharacter);
            }
        }
    }

    $("#seeMore").on('click', function () {
        if (_peopleData.next) {
            getData(_peopleData.next, showResults, showError);
        } else {
            $(this).attr('disabled', true);
        }

    });
}

function showError(_error) {
    console.log(_error);
}

function peopleController() {
    getData(constants.SWAPI_URL, showResults, showError);
}

export default peopleController