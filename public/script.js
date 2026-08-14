document.addEventListener('DOMContentLoaded', () => {
  const bookingDateInput = document.getElementById('bookingDate');
  const dateError = document.getElementById('dateError');
  const submitBtn = document.getElementById('submitBtn');
  const bookingForm = document.getElementById('bookingForm');
  const bookingSuccess = document.getElementById('bookingSuccess');

  // Validate that the selected date falls on Saturday or Sunday
  bookingDateInput.addEventListener('change', () => {
    if (!bookingDateInput.value) return;

    const selectedDate = new Date(bookingDateInput.value + 'T00:00:00');
    const day = selectedDate.getDay(); // 0 = Sunday, 6 = Saturday

    if (day !== 0 && day !== 6) {
      dateError.classList.remove('hidden');
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
      dateError.classList.add('hidden');
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
  });

  // Handle Form Submission
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const bookingDetails = {
      date: bookingDateInput.value,
      timeSlot: document.getElementById('timeSlot').value,
      name: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
    };

    console.log('Booking submitted successfully:', bookingDetails);

    // Hide form and show success message
    bookingForm.classList.add('hidden');
    bookingSuccess.classList.remove('hidden');
  });
});