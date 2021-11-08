"use strict";
function dotTransform(data) {
    var lastData = String(data);
    // 1,000 = 4
    if (lastData.length == 4) {
        lastData = lastData.substring(0, 1) + "," + lastData.substring(1, 4);
    }
    // 10,000 =5
    else if (lastData.length == 5) {
        lastData = lastData.substring(0, 2) + "," + lastData.substring(2, 5);
    }
    // 100,000 = 6
    else if (lastData.length == 6) {
        lastData = lastData.substring(0, 3) + "," + lastData.substring(3, 6);
    }
    // 1,000000 = 7
    else if (lastData.length == 7) {
        lastData = lastData.substring(0, 1) + "," + lastData.substring(4, 7) + "," + lastData.substring(4, 7);
    }
    return lastData;
}
console.log(dotTransform(1000000));
