import { setLocalList, getLocalList } from "../utils/localStorage";
import { showRow } from "../utils/designRows.js";
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

function getData(_url, _showResults, _showError) {
    $.ajax({
        type: 'GET',
        url: _url
    })
    .done(function (data) {
        _showResults(data);
    })
    .fail(function (error) {
       _showError(error);
    })
}

function showResults (_peopleData) {
    if (_peopleData.results) {
      var results = _peopleData.results;
      for (var i = 0; i < results.length; i++) {
          var character = results[i];
          if (!characterIsAlreadySaved(character)) {
            showRow(character, 'tableBody', 'Guardar', saveCharacter);
          }                
      }
    }

    $("#seeMore").on('click', function() { 
        if (_peopleData.next) {
            getData(_peopleData.next, showResults, showError); 
        } else {
            $(this).attr('disabled', true);
        }
        
    });
  }
  
function showError (_error) {
    console.log(_error);
}

function peopleController() {
    getData(constants.SWAPI_URL, showResults, showError);
}

export default peopleController