function tableDesigner() {
    
    this.showRow = function(_characterData, _divToAppend, _methodName, _functionToApplyToTheCharacter) {
        var tableNode = $('#' + _divToAppend);
        var dataName = _characterData.fullName.replace(' ', '');
        var htmlToAdd = "<tr>" +
            "<td>" + _characterData.fullName + "</td>" +
            "<td>" + _characterData.gender + "</td>" +
            "<td>" + _characterData.height + " cm </td>" +
            "<td>" + _characterData.mass + " kg</td>" +
            "<td>" + _characterData.eyeColor + "</td>" +
            "<td><button type='button' class='btn btn-danger' id=" + dataName + ">" + _methodName + "</button></td>" +
            "</tr>";

        tableNode.append(htmlToAdd);

        bindDeleteButton(dataName, _characterData, _functionToApplyToTheCharacter);
    }

    function bindDeleteButton(_characterName, _character, _functionToApplyToTheCharacter) {
        $("#" + _characterName).on('click', function(_event) {
            var theRow = $(this).parent().parent();

            theRow.hide(2000, function () {
                _functionToApplyToTheCharacter(_character);
                $(this).remove();
            });
        })
    }

}

export default tableDesigner;