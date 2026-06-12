function checkPalindrome(str){
    let newStr=str;
    let rev=newStr.split("").reverse("").join("")
    
    if(rev===newStr){
        console.log("String is Palindrome");
    }else{
        console.log("String is not Palindrome");
    }
}

checkPalindrome("madam");