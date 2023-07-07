function selectionSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        var minIdx = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        var temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
}
