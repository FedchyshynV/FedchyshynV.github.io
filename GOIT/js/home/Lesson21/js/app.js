var app = {
	pow: function (number, exponent) {
    var result = 1;

    for (var i = 0; i < exponent; i++) {
        result *= number;
    }

    return  result;
}
}



try {
	module.exports = app;
} catch (e){}
