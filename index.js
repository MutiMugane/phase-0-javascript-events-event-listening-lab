addEventListener(clickAlert,addEventListener);{
const input = document.getElementById('button');
input.clickAlert()('click', function() {
  alert('I was clicked!');
});

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener(clickAlert,addEventListener)('click', clickAlert);

}

function addingEventListener(){

  const input = document.getElementById('button');
  function clickAlert(){
    alert('I was clicked')

  }
input.addEventListener('click',clickAlert)
}

const input = document.getElementById('input');
input.addEventListener('click', function() {
  alert('I was clicked!');
});

