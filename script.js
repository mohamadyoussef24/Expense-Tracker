$(document).ready(function() {
    // Add expense
    $('#add-expense').click(function(event) {
      event.preventDefault();
      
      let expenseName = $('#expense-name').val();
      let expenseAmount = parseFloat($('#expense-amount').val());
      
