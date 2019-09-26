function palindrome()
{
    var revString = "";
    var inpString = document.getElementById("text").value;
    i = inpString.length;

    for(var j=inpString.length-1 ; j>=0 ; j--)
    {
        revString=revString+inpString.charAt(j);
       
    }
if(inpString=== revString)
{
    alert(inpString+ " is a Palindrome");
}
    else
    {
    alert(inpString+ " is not a Palindrome");
}
}


