const url = "https://blockchain.info/ticker";

function recupererPrix(){
    //create a request to the API
    let request = new XMLHttpRequest();
    request.open('GET',url);
    request.responseType = 'json'; //set the response type to JSON
    request.send(); // send the request

    // when the request is loaded, execute this function
    request.onload = ()=>{
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                let reponse = request.response; 
                let prixEnEuro = reponse.EUR.last; 
                console.log(prixEnEuro);
                document.querySelector('#price_label').textContent = prixEnEuro ;
            }
        }else{
            alert('impossible get the data from the API');
        }
    }
    console.log('prix actualisé');
}
setInterval(recupererPrix, 5000); // call the function every second