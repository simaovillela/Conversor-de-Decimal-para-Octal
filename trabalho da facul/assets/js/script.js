document.getElementById('calculate').addEventListener('click', function(){
  const value = document.getElementById('value').value;

  const total = parseInt(value, 10).toString(8);

  document.getElementById('total').innerHTML = (total);

});

