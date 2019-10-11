function postData (url, data, cbk) {
    debugger;
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

  export default postData