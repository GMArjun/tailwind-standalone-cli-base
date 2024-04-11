$(document).ready(function () {
  // Initialize Flatpickr with custom options
  flatpickr("#birthday-picker", {
    dateFormat: "d-m-Y",
    position: "center",
    static: true,
    onClose: function (selectedDates, dateStr, instance) {
      $("#birthday-picker").text(dateStr);
    },
  });
});
