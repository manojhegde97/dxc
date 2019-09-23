var array = [["A1","B1","C1"],
                         ["A2","B2","C2"],
                         ["A3","B3","C3"],
                         ["A4","B4","C4"],
                         ["A5","B5","C5"],
                         ["A1","B1","C1"],
                         ["A2","B2","C2"],
                         ["A3","B3","C3"],
                         ["A4","B4","C4"],
                         ["A5","B5","C5"]],
                table = document.getElementById("table");
        for(var i = 1; i < table.rows.length; i++)
        {
          // cells
          for(var j = 0; j < table.rows[i].cells.length; j++)
          {
              table.rows[i].cells[j].innerHTML = array[i - 1][j];
          }
        }