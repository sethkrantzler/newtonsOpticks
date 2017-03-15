var ligDict = {'ff': 58, 'ffl': 2, 'ssi': 66, 'ffi': 25, 'fi': 189, 'fl': 90, 'ct': 374, 'ss': 314, 'st': 742, 'si': 377, 'sh': 142, 'sl': 30};
var denom = 742;

function getSortedKeys(obj) {
    var keys = []; for(var key in obj) keys.push(key);
    return keys.sort(function(a,b){return obj[b]-obj[a]});
}

function getSortedValues(obj) {
    var values = []; for(var key in obj) values.push(obj[key]);
    return values;
}

function sortNumber(a,b) {
    return a - b;
}

var sortedValues = getSortedValues(ligDict).sort(sortNumber).reverse();

var sortedligDict = getSortedKeys(ligDict);

var screen = document.getElementById('#lig');
var fontSize;
for (var i = 0; i < sortedligDict.length; i++){
  fontSize = (sortedValues[i]/denom)*200 + 16;
  screen.innerHTML+= "<h4 style='font-size:" + fontSize + "px" + "'>" + sortedligDict[i] + "</h4>";
}
