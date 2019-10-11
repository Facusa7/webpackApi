function customLocalStorage() {
  
  this.getLocalList = function (key) {
    if (typeof key === 'string') {
      var localList = localStorage.getItem(key);
      if (localList) {
        var parsedList = JSON.parse(localList);
        return parsedList
      } else {
        return [];
      }
    }
  }

  this.setLocalList = function (key, list) {
    if (typeof key === 'string' && Array.isArray(list)) {
      var strList = JSON.stringify(list);
      localStorage.setItem(key, strList);
    }
  }
}

export default customLocalStorage;