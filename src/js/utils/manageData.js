function postData (url, data, cbk) {
    $.ajax({
      url: url,
      method: 'POST',
      data: data
    })
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
          debugger;
        cbk(error)
      })
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

  export { postData, getData }