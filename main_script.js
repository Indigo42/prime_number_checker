/*
    Description:        This function registers the event handlers.
*/
window.onload = function () {
    document.getElementById("go").onclick = go;
}

/*
    Description:        This function handles I/O between the end-user and the
                        script.
*/
function go() {
    var n;  // Number entered by the end-user.
    var s;  // String to be displayed to the end-user.

    try {
        n = document.getElementById("number").value;
        
        if (isPrime(n)) {
            s = n + " is a prime number.";
        }
        else {
            s = n + " is not a prime number.";
        }
    }
    catch (e) {
        if (e.name && e.message) {
            s = e.name + ": " + e.message;
        }
        else {
            s = "An unknown exception occurred.";
        }
    }
    
    document.getElementById("output").innerHTML = s;
}

/*
    Description:        This function determines whether a nonnegative
                        integer, n, is a prime number.

    Preconditions:      n must be a nonnegative integer that is less than or
                        equal to max.  (max is defined in the function.)
    
    Algorithm:          1.) Test whether n is less than 2.  If n is less than
                            2, it is not a prime number and no further 
                            computation is necessary.  However, if n is 
                            greater than or equal to 2, continue.
                        
                        2.) Test whether n is 2.  If n is 2, it is a prime 
                            number and no further computation is necessary.
                            However, if n is greater than 2, continue.

                        3.) Test whether n is divisible without remainder by
                            successive integers between 2 and n - 1, 
                            inclusive.  If n can be divided without remainder
                            by any of those integers, it is not a prime 
                            number; if n cannot be divided without remainder 
                            by any of those integers, it is a prime number.

    Known flaws:        The code that checks the preconditions rejects strings
                        that represent numbers in scientific notation (such as
                        "2e3").  It also rejects numeric strings that contain 
                        digit separators (such as "1,000" and "1 000").  To
                        fix these flaws, it might be helpful to consider using
                        regular expressions or a JavaScript library/framework.

    Remarks:            This function considers 2 as the first prime number.
*/
function isPrime(n) {
    var i;              // Loop index.
    var max = 1000000;  // Arbitrary maximum value.

    // Check the preconditions.
    if (parseInt(n, 10) !== +n || n < 0 || n > max) {
        throw new Error(
            "Please provide a nonnegative integer that is less than or " +
            "equal to " + max + "."
        );
    }

    if (n < 2) return false;

    for (i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}
