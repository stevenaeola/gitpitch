window.addEventListener('click', function(event){
    fetch('http://127.0.0.1:8090/list')
	.then(response => response.text())
	.then(function(body ){document.getElementById('content').innerHTML=body})
});
