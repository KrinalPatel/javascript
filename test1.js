function palindrome() {
    var str = document.getElementById('text').value;
    var inpString = str;
    str = str.split.reverse.join('');
    // str = str.reverse();
    // str = str.join('');

    if (inpString == str) {
        console.log(1212);
        alert(str + " " + "is a pali");
    } else {
        console.log("not palindrome");
        alert(str + " " + "is not a pali");
    }
}

