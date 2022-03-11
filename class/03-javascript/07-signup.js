function checkValidation(){

    const email = document.getElemntById("email").value
    const pw1 = document.getElemntById("password1").value
    const pw2 = document.getElemntById("password2").value
    
    // email과 pw1과 pw2가 모두 빈 값이 아닐 떄 
    // mybutton을 활성화 하고, 배경색상을 노란색으로 변경 
    // 그렇지 않을때 (else)
    // mybutton을 비활성화 하고, 배경색상을 삭제 

    if(email !=="" && pw1 !== && pw2 !== ''){
        document.getElemntById("mybutton").disabled = false; 
        document.getElemntById("mybutton").setAttribute("style","background-color: yellow") 
    }else{ 
        document.getElemntById("mybutton").disabled = true;
        document.getElemntById("mybutton").setAttribute("style","background-color: none") 
    }    
}