$(document).ready(function() {
    // Add expense
    $('#add-expense').click(function(event) {
      event.preventDefault();
      
      let expenseName = $('#expense-name').val();
      let expenseAmount = parseFloat($('#expense-amount').val());

      // Validate input fields
      if (expenseName === '' || isNaN(expenseAmount)) {
        alert('Please enter valid expense details.');
        return;
      }
      
       
      // Create expense row
      let row = $('<tr>');
      row.append($('<td>').text(expenseName));
      row.append($('<td>').text(expenseAmount.toFixed(2)));
      
      // Create delete button
      let deleteButton = $('<button>').addClass('delete-btn').text('Delete');
      deleteButton.click(function() {
        $(this).closest('tr').remove();
        updateTotalAmount();
      });
      row.append($('<td>').append(deleteButton));
       // Add row to table
       $('#expense-table tbody').append(row);
      
       // Clear input fields
       $('#expense-name').val('');
       $('#expense-amount').val('');
       
       // Update total amount
       updateTotalAmount();
     });
     
     // Update total amount
     function updateTotalAmount() {
       let total = 0;
       $('#expense-table tbody tr').each(function() {
         total += parseFloat($(this).find('td:nth-child(2)').text());
       });
       $('#total-amount').text(total.toFixed(2));
     }
   });
     