$(document).ready(function () {
  renderCalendar();

  $("#month, #year").change(function () {
    renderCalendar();
  });

  $("#dateInput").keypress(function (e) {
    if (e.keyCode === 13) {
      var inputDate = $(this).val();
      var cell = findCalendarCell(inputDate);
      toggleCellColor(cell);
    }
  });

  $("#dateButton").click(function () {
    var inputDate = $("#dateInput").val();
    var cell = findCalendarCell(inputDate);
    toggleCellColor(cell);
  });

  function renderCalendar() {
    var month = parseInt($("#month").val());
    var year = parseInt($("#year").val());
    var daysInMonth = new Date(year, month, 0).getDate();
    var firstDayOfWeek = new Date(year, month - 1, 1).getDay();
    var calendar = $("#calendar");
    calendar.empty();

    var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (var i = 0; i < daysOfWeek.length; i++) {
      calendar.append('<div class="dayOfWeek">' + daysOfWeek[i] + "</div>");
    }

    for (var i = 0; i < firstDayOfWeek; i++) {
      calendar.append("<div></div>");
    }

    for (var day = 1; day <= daysInMonth; day++) {
      var cell = $("<div>" + day + "</div>");
      cell.data("day", day);
      calendar.append(cell);
    }

    $(".calendar div").click(function () {
      toggleCellColor($(this));
    });
  }

  function findCalendarCell(date) {
    var day = parseInt(date);
    var cells = $(".calendar div");
    for (var i = 0; i < cells.length; i++) {
      var cell = $(cells[i]);
      if (cell.data("day") === day) {
        return cell;
      }
    }
    return null;
  }

  function toggleCellColor(cell) {
    cell.toggleClass("green");
  }
});
