function tableDesigner() {
    
    this.showRow = function(_characterData, _divToAppend, _methodName, _functionToApplyToTheCharacter) {
        var tableNode = $('#' + _divToAppend);
        var dataName = _characterData.name.replace(' ', '');
        var htmlToAdd = "<tr>" +
            "<td>" + _characterData.name + "</td>" +
            "<td>" + translateGender(_characterData.gender) + "</td>" +
            "<td>" + _characterData.height + " cm </td>" +
            "<td>" + _characterData.mass + " kg</td>" +
            "<td>" + translateEyeColor(_characterData.eye_color) + "</td>" +
            "<td><button type='button' class='btn btn-danger' id=" + dataName + ">" + _methodName + "</button></td>" +
            "</tr>";
        tableNode.append(htmlToAdd);

        bindDeleteButton(dataName, _characterData, _functionToApplyToTheCharacter);
    }

    function bindDeleteButton(_characterName, _character, _functionToApplyToTheCharacter) {
        $("#" + _characterName).on('click', function (_event) {
            var theRow = $(this).parent().parent();

            theRow.hide(2000, function () {
                _functionToApplyToTheCharacter(_character);
                $(this).remove();
            });
        })
    }

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

}

export default tableDesigner;