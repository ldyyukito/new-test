$(function() {
      var sortKey = $('thead th').data('order');
      $('#score thead').on('click', 'th', function() {
        var line = $(this).data('id');
        var array = getArray();
        var newArray = [];
        if(line !== 'name') {
          if (sortKey === "asc") {
            newArray = sortAsc(array, line);
            sortKey = 'dec';
          }
          else {
            newArray = sortDec(array, line);
            sortKey = 'asc';
          }
        }

        $("#sc").empty();
        fill(newArray);
      });
    });

      function getArray() {
        var result = [];
        $('#sc tr').each(function() {
          result.push({
            name: $("td", this).eq(0).text(),
            chinese: $("td", this).eq(1).text(),
            math: $("td", this).eq(2).text()
          });
        });
        return result;
      }

      function sortAsc(result, line) {
         result.sort(function(a, b) {
          return parseInt(a[line]) - parseInt(b[line]);
        });
        return result;
      }

      function sortDec(result, line) {
        return result.sort(function(a, b) {
          return b[line] - a[line];
        });
      }

      function fill(newResult) {
        var string = "";
        newResult.forEach(function(val) {
          string += '<tr>' + '<td>' + val.name + '</td>' + '<td>' + val.chinese + '</td>' +
            '<td>' + val.math + '</td>' + '</tr>';
        });
        $('#sc').html(string);
      }
