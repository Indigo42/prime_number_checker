runTestCases();

function runTestCases() {
    var i;              // Loop index.
    var s = "";         // Output string.
    var testCases = [
        null,
        "fred",
        ,
        undefined,
        -0,
        "-0",
        -42,
        "-42",
        "- 42",
        1.0,
        "1.0",
        7.0,
        "7.0",
        5/2,
        "5/2",
        "5 / 2",
        1/5,
        0.2,
        "0.2",
        -0.2,
        "-0.2",
        5.25,
        "5.25",
        "5.25xyz",
        2e+100,
        1e+999,
        1e-1,
        -1e+999,
        -Infinity,
        NaN,
        Number.MAX_VALUE * 2,
        -Number.MAX_VALUE * 2,
        Infinity,
        true,
        false,
        window,
        window.location.href,
        window.horsefeathers,
        window.onload,
        window.open,
        "123abc",
        0X10,
        "0x10",
        0xD,
        "0Xd",
        "d",
        0x19,
        "0x19",
        01,
        15,
        "15",
        015,
        "015",
        "42j",
        "5%",
        " 991",
        " 13 ",
        "9 ",
        "?2",
        "A5",
        "",
        " ",
        "\n",
        "   ",
        1e+3,
        "1e+3",
        1000.00,
        "1000.00",
        1000,
        "1000",
        "\n1000",
        "1000\n",
        "1 000",
        "1,000",
        "-1,000",
        -1e+3,
        "-1e+3",
        -1e-3,
        "-1e-3"
    ];

    // Include the integers from 0 through 100 as test cases.
    for (i = 0; i <= 100; ++i) {
        testCases.push(i);
    }

    // Run the test cases.
    for (i = 0; i < testCases.length; ++i) {
        s += testCases[i] + " -> " + typeof testCases[i] + " -> ";

        try {
            s += (isPrime(testCases[i]) ? "True\n" : "False\n");
        }
        catch (e) {
            if (e.name && e.message) {
                s += e.name + ": " + e.message + "\n";
            }
            else {
                s += "An unknown exception occurred.\n";
            }
        }
    }

    console.log(s);
}
