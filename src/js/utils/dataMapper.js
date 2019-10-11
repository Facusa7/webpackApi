import characterModel from '../models/characterModel.js';

function translateGender(_gender) {
    if (_gender == "male") {
        return "Machirulo";
    } else if (_gender == "female") {
        return "Femibolche";
    } else {
        return "Hay que hablarle en inclusivo";
    }
}

function translateEyeColor(_eyeColor) {
    switch (_eyeColor) {
        case "blue":
            return "azul";
        case "yellow":
            return "amarillo";
        case "red":
            return "rojo";
        case "brown":
            return "marron";
        case "blue-gray":
            return "gris azulado";
        case "orange":
            return "naranja";
        case "hazel":
            return "avellana";
        case "dark":
        case "black":
            return "negro";
        case "pink":
            return "rosa";
        case "gold":
            return "dorado";
        case "white":
            return "blanco";
        default:
            return "Indefinido/Mas de un color"
    }
}

function dataMapper() {    
  
  this.formatCharacter = function(_data) {
    var translatedGender = translateGender(_data.gender);
    var translatedEyeColor = translateGender(_data.eye_color);
    var formattedHeight = _data.height + " cm";
    var formattedMass = _data.mass + " kg";

    return new characterModel(_data.name, translatedGender, formattedHeight, formattedMass, translatedEyeColor);
  } 
}

export default dataMapper;
