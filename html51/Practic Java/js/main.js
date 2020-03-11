function Run() {
    var a = document.getElementById('a').value | 0;
    var b = document.getElementById('b').value | 0;
    var res = document.getElementById('res');
    var sum = a + b;
    var rizn = a - b;
    var dob = a * b;
    res.innerHTML = "Результат:" + "<br>" + "<hr>" + "Сума = " + sum + "<br>" + "Різниця = " + rizn + "<br>" + "Добуток = " + dob;
}

function Run2() {
    var x = document.getElementById('x').value | 0;
    var y = document.getElementById('y').value | 0;
    var res = document.getElementById('res02');
    var sum = (Math.abs(x) - Math.abs(y)) / (1 + Math.abs(x) * Math.abs(y));
    res.innerHTML = "Результат" + "<br>" + sum;

}

function Run3() {
    var w = document.getElementById('w').value | 0;
    var res = document.getElementById('res03');
    var dob = (Math.pow(w, 3))
    res.innerHTML = "Результат" + "<br>" + dob;
}

function Run4() {
    var z = document.getElementById('z').value | 0;
    var e = document.getElementById('e').value | 0;
    var res = document.getElementById('res04');
    var dob = Math.sqrt((Math.abs(z) * Math.abs(e)))
    res.innerHTML = "Результат" + "<br>" + dob;
}