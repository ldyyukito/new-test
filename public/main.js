var ChineseButton = document.getElementById('select');
ChineseButton.addEventListener('click', function() {
  sortChinese();
});
var MathButton = document.getElementById('select1');
MathButton.addEventListener('click', function() {
  sortMath();
});

function sortChinese() {
  var trs = document.getElementById("score").getElementsByTagName("tr");
  var newArr = Arr(trs);
  var sortedArray = newArr.sort(function(a, b) {
    return a.Chinese - b.Chinese;
  });
  sortArr(sortedArray,trs);
}

function sortMath() {
  var trs = document.getElementById("score").getElementsByTagName("tr");
  var newArr = Arr(trs);
  var sortedArray = newArr.sort(function(a, b) {
    return a.Math - b.Math;
  });
  sortArr(sortedArray,trs);
}


function Arr(trs) {
  var newArray = [];
  for (var i = 1; i < trs.length; i++) {
    newArray.push({
      Name: trs[i].getElementsByTagName("td")[0].innerHTML,
      Chinese: trs[i].getElementsByTagName("td")[1].innerHTML,
      Math: trs[i].getElementsByTagName("td")[2].innerHTML
    });
  }
  return newArray;
}

function sortArr(sortedArray,trs) {
  for (var m = 0; m < sortedArray.length; m++) {
    trs[m + 1].getElementsByTagName("td")[0].innerHTML = sortedArray[m].Name;
    trs[m + 1].getElementsByTagName("td")[1].innerHTML = sortedArray[m].Chinese;
    trs[m + 1].getElementsByTagName("td")[2].innerHTML = sortedArray[m].Math;
  }
}



// var selectBut = document.getElementById('select');
// selectBut.addEventListener('click', function() {
//   sortChinese();
// });
// function sortChinese() {
//   var newArray = [];
//   var trs = document.getElementById("score").getElementsByTagName("tr"); //选中每行
//   for (var i = 1; i < trs.length; i++) {
//     newArray.push({
//       Name: trs[i].getElementsByTagName("td")[0].innerHTML,
//       Chinese: trs[i].getElementsByTagName("td")[1].innerHTML,
//       Math: trs[i].getElementsByTagName("td")[2].innerHTML
//     });
//   }
//   var sortedArray = newArray.sort(function(a, b) {
//     return a.Chinese - b.Chinese;
//   });
//   for (var m = 0; m < sortedArray.length; m++) {
//     trs[m+1].getElementsByTagName("td")[0].innerHTML = sortedArray[m].Name;
//     trs[m+1].getElementsByTagName("td")[1].innerHTML = sortedArray[m].Chinese;
//     trs[m+1].getElementsByTagName("td")[2].innerHTML = sortedArray[m].Math;
//   }
// }
//
//
//
//
//
//
// var selectBut1 = document.getElementById('select1');
// selectBut1.addEventListener('click', function() {
//   sortMath();
// });
// function sortMath() {
//   var newArray = [];
//   var trs = document.getElementById("score").getElementsByTagName("tr"); //选中每行
//   for (var i = 1; i < trs.length; i++) {
//     newArray.push({
//       Name: trs[i].getElementsByTagName("td")[0].innerHTML,
//       Chinese: trs[i].getElementsByTagName("td")[1].innerHTML,
//       Math: trs[i].getElementsByTagName("td")[2].innerHTML
//     });
//   }
//   var sortedArray = newArray.sort(function(a, b) {
//     return a.Math - b.Math;
//   });
//   for (var m = 0; m < sortedArray.length; m++) {
//     trs[m+1].getElementsByTagName("td")[0].innerHTML = sortedArray[m].Name;
//     trs[m+1].getElementsByTagName("td")[1].innerHTML = sortedArray[m].Chinese;
//     trs[m+1].getElementsByTagName("td")[2].innerHTML = sortedArray[m].Math;
//   }
// }
