$(document).ready(function(){ // Aşağıdaki kodların sayfa yüklendiği zaman çalışmasını sağlar
    const checkpoints = [false,false,false,false,false]; // Güçlü bir parolanın sağlaması gereken 5 şart
    $('#password').on('input', function(){  // #password isimli input kutusunda bir değişiklik yapıldığı zaman bu fonksiyonun çalışmasını sağlar
        const password = $('#password').val(); // oluşturulan password değişkenine #password inputundan gelen değer atanıyor
        if(password.match(/[a-z]/g)){ 
            checkpoints[0] = true  // eğer alfabedeki küçük harflerden herhangi birisi girilirse birinci şartı sağlıyor
        }
        else{
            checkpoints[0] = false // eğer sağlamıyorsa da false yapılmasını sağlıyoruz ki input kutusundan değer silinirse barın uzunluğu gerilesin
        }
        if(password.match(/[A-Z]/g)){ 
            checkpoints[1] = true // eğer alfabedeki herhangi bir büyük harf girilirse ikinci şartı sağlıyor
        }
        else{
            checkpoints[1] = false 
        }
        if(password.match(/[!,#,$,%,&,?]/g)){
            checkpoints[2] = true // eğer yukarıda belirttiğimiz işaretlerden herhangi biri girilirse üçüncü şart sağlanıyor
        }
        else{
            checkpoints[2] = false
        }
        if(password.match(/[0-9]/)){
            checkpoints[3] = true // eğer bir harf girilirse dördüncü şart sağlanıyor
        }
        else{
            checkpoints[3] = false
        }
        if(password.length >= 8){
            checkpoints[4] = true // eğer girilen parolanın uzunluğu 8 karakterden fazla ya da eşitse son şartı da sağlıyor
        }
        else{
            checkpoints[4] = false
        }
        let check = 0;
        for (let i = 0; i < checkpoints.length; i++) {
            if(checkpoints[i] == true){
                check++; // checkpoints dizisindeki şartlar kontrol ediliyor eğer true varsa 'check' değişkeni bir arttırılıyor
            }
        }
        
        switch (check) { // check değişkeninin değeri parolanın kaç tane şartı sağladığını gösterir 
            case 0:
                $('#colorBar').css('width', '0%'); // eğer hiçbir şartı sağlamıyorsa barın uzunluğu gözükmeyecek şekilde ayarlanır
                break;
            case 1:
                $('#colorBar').css('background-color', 'red'); // eğer bir şartı sağlıyorsa barın rengi kırmızı oluyor ve alt satırdaki kod ile barın uzunluğu arttırılıyor
                $('#colorBar').css('width', '10%');
                break; // bir şart sağlandıysa gereken ayarlamalar yapılıyor ve bu satırdan sonraki kodları okumasına gerek kalmadığı için break ile durduruluyor
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

    
