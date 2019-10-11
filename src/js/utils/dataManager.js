function dataManager() {

    this.postData = function(_url, data, cbk) {
        $.ajax({
            url: _url,
            method: 'POST',
            data: data
        })
        .done(function (data) {
            cbk(null, data)
        })
        .fail(function (error) {
            cbk(error)
        })
    }
    
    this.getData = function(_url, _showResults, _showError) {
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
}



export default dataManager;