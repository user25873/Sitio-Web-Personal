function resultado() {
    var p1, p2, p3, p4, nota;
     
    /* 1 pregunta */
    if (document.getElementById('a1').checked==true) {p1=1}
    if (p1==1) {document.querySelectorAll('.pregunta1')[0].style.color='#00FF00'}
    else {p1=0}
    /* 2 pregunta */
    if (document.getElementById('b2').checked==true) {p2=1}
    if (p2==1) {document.querySelectorAll('.pregunta2')[1].style.color='#00FF00'}
    else {p2=0}
    /* 3 pregunta */
    if (document.getElementById('c3').checked==true) {p3=1}
    if (p3==1) {document.querySelectorAll('.pregunta3')[2].style.color='#00FF00'}
    else {p3=0}
    /* 4 pregunta */
    if (document.getElementById('d4').checked==true) {p4=1}
    if (p4==1) {document.querySelectorAll('.pregunta4')[3].style.color='#00FF00'}
    else {p4=0}
     
    nota=p1+p2+p3+p4;
    document.getElementById('resultado').innerHTML="Aciertos: "+nota;
    rs=confirm("C o n t i n u a r . . .");
    if (rs==false) {document.forms[0].reset();location.reload()}
    }