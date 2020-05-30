document.getElementById('sendButton').addEventListener('click', function() {
    
    const name = document.getElementById('nameInput').value
    const surname = document.getElementById('surnameInput').value
    const email = document.getElementById('emailInput').value
    const message = document.getElementById('messageInput').value


    if (!name || !surname || !email || !message){

        // set background of the empty inputs to red
    
    }else{
        const  postData = {
            name,
            surname,
            email,
            message
        }
    
        // post credentials to send_email endpoint
    
        $.ajax({
            url: 'http://51.15.245.21:3000/send_email',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(postData),
            success: function(res){
                console.log(res)

                // show user a success m essage


            },
            error: function(err) {
                console.log(err)
            }
        })
    }


})