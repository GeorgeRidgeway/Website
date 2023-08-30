function temperatureConverter() {
      var f = parseInt(document.getElementsByName('input1')[0].value);
      var result = (f-32)/1.8;
      document.getElementsByName('display')[0].value= result.toFixed(2);
}
