function tableDesigner() {
    var _position = 1;

    this.showRow = function(_characterData, _divToAppend, _methodName, _functionToApplyToTheCharacter) {
        var tableNode = $('#' + _divToAppend);
        var dataName = _characterData.fullName.replace(' ', '');
        var htmlToAdd = "<tr>" +
            "<td>" + _position + "</td>" +
            "<td>" + _characterData.fullName + "</td>" +
            "<td>" + _characterData.gender + "</td>" +
            "<td>" + _characterData.height + "</td>" +
            "<td>" + _characterData.mass + "</td>" +
            "<td>" + _characterData.eyeColor + "</td>" +
            "<td><button type='button' class='btn btn-danger' id=" + dataName + ">" + _methodName + "</button></td>" +
            "</tr>";

        tableNode.append(htmlToAdd);

        bindDeleteButton(dataName, _characterData, _functionToApplyToTheCharacter);

        _position++;
    }

    function bindDeleteButton(_characterName, _character, _functionToApplyToTheCharacter) {
        $("#" + _characterName).on('click', function(_event) {
            var theRow = $(this).parent().parent();

            theRow.hide(500, function () {
                _functionToApplyToTheCharacter(_character);
                $(this).remove();
            });
        })
    }

}

export default tableDesigner;