$(document).ready(function(){
    const checkpoints = [false,false,false,false,false]; 
    $('#password').on('input', function(){ 
        const password = $('#password').val();
        if(password.match(/[a-z]/g)){ 
            checkpoints[0] = true
        }
        else{
            checkpoints[0] = false
        if(password.match(/[A-Z]/g)){ 
            checkpoints[1] = true 
        }
        else{
            checkpoints[1] = false 
        }
        if(password.match(/[!,#,$,%,&,?]/g)){
            checkpoints[2] = true 
        }
        else{
            checkpoints[2] = false
        }
        if(password.match(/[0-9]/)){
            checkpoints[3] = true 
        }
        else{
            checkpoints[3] = false
        }
        if(password.length >= 8){
            checkpoints[4] = true 
        }
        else{
            checkpoints[4] = false
        }
        let check = 0;
        for (let i = 0; i < checkpoints.length; i++) {
            if(checkpoints[i] == true){
                check++; 
            }
        }
        
        switch (check) {
            case 0:
                $('#colorBar').css('width', '0%');
                break;
            case 1:
                $('#colorBar').css('background-color', 'red'); 
                $('#colorBar').css('width', '10%');
                break; 
            case 2:
                $('#colorBar').css('background-color', 'yellow');
                $('#colorBar').css('width', '25%');
                break;
            case 3:
                $('#colorBar').css('background-color', 'orange');
                $('#colorBar').css('width', '50%');
                break;
            case 4:
                $('#colorBar').css('background-color', 'green');
                $('#colorBar').css('width', '75%');
                 break;
             case 5:
                $('#colorBar').css('background-color', 'greenyellow');
                $('#colorBar').css('width', '100%');
                 break;
        }
    })
    

})

    
