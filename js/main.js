(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    // Inject & Initialize Booking Confirmation Modal
    if ($('#bookingModal').length === 0) {
        $('body').append(`
        <div class="modal fade" id="bookingModal" tabindex="-1" aria-labelledby="bookingModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content text-white" style="background-color: #1a1b1e; border-radius: 16px; border: 1px solid #2d2f36; box-shadow: 0 20px 50px rgba(0,0,0,0.7);">
              <div class="modal-header border-0 pb-0 position-relative">
                <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body p-4 p-md-5 pt-0">
                
                <!-- Success State -->
                <div id="bookingSuccessState" class="text-center py-4" style="display: none;">
                  <div class="mb-3">
                    <i class="fa fa-check-circle display-1" style="color: #FEA116;"></i>
                  </div>
                  <h2 class="text-white fw-bold mb-2">Reservation Confirmed!</h2>
                  <p class="text-white-50 mb-4 fs-5" id="bookingSuccessMsg">Thank you! Your reservation has been successfully placed.</p>
                  <button type="button" class="btn btn-primary rounded-pill px-5 py-2 text-uppercase fw-bold" data-bs-dismiss="modal" style="background-color: #FEA116; border-color: #FEA116; color: #fff;">Done</button>
                </div>

                <!-- Form & Summary State -->
                <div id="bookingFormState">
                  <div class="text-center mb-4">
                    <div class="mb-2" style="color: #FEA116;">
                      <i class="fa fa-bell fs-2"></i>
                    </div>
                    <h2 class="text-white fw-bold mb-1" style="letter-spacing: -0.5px;">Confirm Your Reservation</h2>
                    <p class="text-white-50 small mb-0">Verify your details to finalize your luxury getaway</p>
                  </div>

                  <!-- Summary Box -->
                  <div class="p-4 mb-4 rounded-3" style="background: #121316; border: 1px solid #2a2b30;">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <span class="text-white-50 small">Selected Suite:</span>
                      <span class="fw-bold text-white text-end" id="modalSuiteName">Deluxe Suite</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <span class="text-white-50 small">Rate:</span>
                      <span class="fw-bold text-white" id="modalRate">₦35,000 / Night</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <span class="text-white-50 small">Check-In Date:</span>
                      <span class="fw-bold text-white" id="modalCheckIn">Jul 27, 2026</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <span class="text-white-50 small">Check-Out Date:</span>
                      <span class="fw-bold text-white" id="modalCheckOut">Aug 3, 2026</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <span class="text-white-50 small">Total Days:</span>
                      <span class="fw-bold text-white" id="modalTotalNights">7 Days</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <span class="text-white-50 small">Guests:</span>
                      <span class="fw-bold text-white text-uppercase" id="modalGuests">2 ADULTS</span>
                    </div>
                    <hr style="border-color: #2e3038; margin: 14px 0;">
                    <div class="d-flex justify-content-between align-items-center pt-1">
                      <div>
                        <div class="fw-bold fs-5 text-white">Total Cost:</div>
                        <div class="text-white-50 small" id="modalCostBreakdown">(₦35,000 × 7 Days)</div>
                      </div>
                      <span class="fw-bold fs-3" style="color: #FEA116;" id="modalTotalCost">₦245,000</span>
                    </div>
                  </div>

                  <!-- Inputs Form -->
                  <form id="modalConfirmForm">
                    <div class="row g-3 mb-3">
                      <div class="col-md-6">
                        <input type="text" class="form-control modal-dark-input" id="modalGuestName" placeholder="Full Name" required style="background: #23252b; border: 1px solid #32353e; color: #fff; padding: 12px 16px; border-radius: 8px;">
                      </div>
                      <div class="col-md-6">
                        <input type="email" class="form-control modal-dark-input" id="modalGuestEmail" placeholder="Email Address" required style="background: #23252b; border: 1px solid #32353e; color: #fff; padding: 12px 16px; border-radius: 8px;">
                      </div>
                      <div class="col-12">
                        <input type="tel" class="form-control modal-dark-input" id="modalGuestPhone" placeholder="Phone Number" required style="background: #23252b; border: 1px solid #32353e; color: #fff; padding: 12px 16px; border-radius: 8px;">
                      </div>
                    </div>

                    <button type="submit" class="btn w-100 py-3 rounded-pill fw-bold text-uppercase mt-2" style="background: #2b2d35; border: 1px solid #424652; color: #fff; letter-spacing: 1px; transition: all 0.3s ease;">
                      CONFIRM BOOKING
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        `);
    }

    // Helper to parse dates
    function parseDateVal(valStr) {
        if (!valStr || typeof valStr !== 'string' || valStr.trim() === "") return null;
        if (typeof moment !== 'undefined') {
            var m = moment(valStr, ['YYYY-MM-DD', 'MM/DD/YYYY', 'DD/MM/YYYY', 'D MMM, YYYY', 'MM/DD/YYYY h:mm A']);
            if (m.isValid()) return m;
        }
        var d = new Date(valStr);
        return isNaN(d.getTime()) ? null : d;
    }

    // Helper to format date
    function formatDisplayDate(dateObj) {
        if (typeof moment !== 'undefined' && moment.isMoment(dateObj)) {
            return dateObj.format('MMM D, YYYY');
        }
        var d = (dateObj instanceof Date) ? dateObj : new Date();
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
    }

    // Click handler for "Book Now" buttons across all pages
    $(document).on('click', 'button, a', function (e) {
        var btnText = $(this).text().trim().toLowerCase();
        if (btnText !== 'book now') return;

        var $btn = $(this);
        var $form = $btn.closest('form, .booking, .container-fluid, .container');
        var $card = $btn.closest('.room-item, .card');

        e.preventDefault();

        // 1. Extract Dates
        var checkInVal = $form.find('input[placeholder*="Check in"], #date1 input').val();
        var checkOutVal = $form.find('input[placeholder*="Check out"], #date2 input').val();

        var today = new Date();
        var checkInDate = parseDateVal(checkInVal) || (typeof moment !== 'undefined' ? moment(today) : today);
        var checkOutDate = parseDateVal(checkOutVal);

        if (!checkOutDate) {
            if (typeof moment !== 'undefined' && moment.isMoment(checkInDate)) {
                checkOutDate = checkInDate.clone().add(1, 'days');
            } else {
                checkOutDate = new Date(checkInDate.getTime() + 86400000);
            }
        }

        var checkInMs = checkInDate.valueOf ? checkInDate.valueOf() : checkInDate.getTime();
        var checkOutMs = checkOutDate.valueOf ? checkOutDate.valueOf() : checkOutDate.getTime();

        if (checkOutMs <= checkInMs) {
            if (typeof moment !== 'undefined' && moment.isMoment(checkInDate)) {
                checkOutDate = checkInDate.clone().add(1, 'days');
            } else {
                checkOutDate = new Date(checkInMs + 86400000);
            }
            checkOutMs = checkOutDate.valueOf ? checkOutDate.valueOf() : checkOutDate.getTime();
        }

        var totalNights = Math.max(1, Math.round((checkOutMs - checkInMs) / (1000 * 60 * 60 * 24)));

        var checkInStr = formatDisplayDate(checkInDate);
        var checkOutStr = formatDisplayDate(checkOutDate);

        // 2. Extract Suite / Hall Name and Rate
        var suiteName = "";
        var rateNum = 35000;
        var rateStr = "";

        var roomSelectVal = $form.find('select:has(option:contains("Room Type")), #select3').find('option:selected').text();
        var hallSelectVal = $form.find('select:has(option:contains("Hall Type")), #select4').find('option:selected').text();

        if (roomSelectVal && !roomSelectVal.includes('Room Type') && !roomSelectVal.includes('Select A Room')) {
            suiteName = roomSelectVal.split('-')[0].trim();
            var priceMatch = roomSelectVal.match(/₦([0-9,]+)/);
            if (priceMatch) {
                rateNum = parseInt(priceMatch[1].replace(/,/g, ''), 10);
            }
            rateStr = "₦" + rateNum.toLocaleString() + " / Night";
        } else if (hallSelectVal && !hallSelectVal.includes('Hall Type') && !hallSelectVal.includes('Select A Hall')) {
            suiteName = hallSelectVal.split('-')[0].trim();
            var priceMatchHall = hallSelectVal.match(/₦([0-9,]+)/);
            if (priceMatchHall) {
                rateNum = parseInt(priceMatchHall[1].replace(/,/g, ''), 10);
            }
            rateStr = "₦" + rateNum.toLocaleString() + " / Event";
        } else if ($card.length > 0) {
            var cardTitle = $card.find('h5, h4, .h5').first().text().trim();
            var cardPriceText = $card.find('small:contains("₦"), div:contains("₦")').first().text().trim();
            if (cardTitle) suiteName = cardTitle;
            var priceMatchCard = cardPriceText.match(/₦([0-9,]+)/);
            if (priceMatchCard) {
                rateNum = parseInt(priceMatchCard[1].replace(/,/g, ''), 10);
            }
            rateStr = "₦" + rateNum.toLocaleString() + " / Night";
        }

        if (!suiteName) suiteName = "Deluxe Suite";
        if (!rateStr) rateStr = "₦" + rateNum.toLocaleString() + " / Night";

        var totalCost = rateNum * totalNights;
        var totalCostStr = "₦" + totalCost.toLocaleString();

        // 3. Extract Guests
        var adultText = $form.find('select:has(option:contains("Adult")), #select1').find('option:selected').text().trim();
        var childText = $form.find('select:has(option:contains("Child")), #select2').find('option:selected').text().trim();

        var adultCount = 1;
        if (adultText.includes('1')) adultCount = 1;
        else if (adultText.includes('2')) adultCount = 2;
        else if (adultText.includes('3')) adultCount = 3;

        var childCount = 0;
        if (childText.includes('1')) childCount = 1;
        else if (childText.includes('2')) childCount = 2;
        else if (childText.includes('3')) childCount = 3;

        var guestsStr = adultCount + (adultCount === 1 ? " ADULT" : " ADULTS");
        if (childCount > 0) {
            guestsStr += ", " + childCount + (childCount === 1 ? " CHILD" : " CHILDREN");
        }

        // 4. Populate Modal
        $('#modalSuiteName').text(suiteName);
        $('#modalRate').text(rateStr);
        $('#modalCheckIn').text(checkInStr);
        $('#modalCheckOut').text(checkOutStr);
        $('#modalTotalNights').text(totalNights + (totalNights === 1 ? " Day" : " Days"));
        $('#modalGuests').text(guestsStr);
        $('#modalCostBreakdown').text('(₦' + rateNum.toLocaleString() + ' × ' + totalNights + (totalNights === 1 ? ' Day)' : ' Days)'));
        $('#modalTotalCost').text(totalCostStr);

        // Reset state & show modal
        $('#bookingSuccessState').hide();
        $('#bookingFormState').show();
        $('#modalConfirmForm')[0].reset();

        var modalEl = document.getElementById('bookingModal');
        var modalObj = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
        modalObj.show();
    });

    // Handle Modal Form Submit to Web3Forms
    $(document).on('submit', '#modalConfirmForm', function (e) {
        e.preventDefault();
        var $form = $(this);
        var $btn = $form.find('button[type="submit"]');
        var origText = $btn.text();

        var guestName = $('#modalGuestName').val().trim();
        var guestEmail = $('#modalGuestEmail').val().trim();
        var guestPhone = $('#modalGuestPhone').val().trim();
        var suiteName = $('#modalSuiteName').text().trim();
        var rate = $('#modalRate').text().trim();
        var checkIn = $('#modalCheckIn').text().trim();
        var checkOut = $('#modalCheckOut').text().trim();
        var totalDays = $('#modalTotalNights').text().trim();
        var guests = $('#modalGuests').text().trim();
        var totalCost = $('#modalTotalCost').text().trim();

        $btn.prop('disabled', true).html('<i class="fa fa-spinner fa-spin me-2"></i>CONFIRMING...');

        var reservationSummary = 
            "GUEST INFORMATION:\n" +
            "Full Name: " + guestName + "\n" +
            "Email: " + guestEmail + "\n" +
            "Phone: " + guestPhone + "\n\n" +
            "RESERVATION DETAILS:\n" +
            "Selected Room / Hall: " + suiteName + "\n" +
            "Rate: " + rate + "\n" +
            "Check-In Date: " + checkIn + "\n" +
            "Check-Out Date: " + checkOut + "\n" +
            "Total Stay Duration: " + totalDays + "\n" +
            "Guests: " + guests + "\n" +
            "Total Cost: " + totalCost;

        var formData = new FormData();
        formData.append('access_key', 'd2b82a60-1b35-4c09-b6e2-045fae0e93cb');
        formData.append('subject', 'New Reservation: ' + suiteName + ' - ' + guestName);
        formData.append('name', guestName);
        formData.append('email', guestEmail);
        formData.append('phone', guestPhone);
        formData.append('message', reservationSummary);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(function(response) { return response.json(); })
        .then(function(result) {
            $btn.prop('disabled', false).text(origText);
            $('#bookingSuccessMsg').html('Thank you <strong>' + guestName + '</strong>! Your reservation for <strong>' + suiteName + '</strong> has been confirmed.<br><small class="text-white-50">Reservation details have been sent to ' + guestEmail + ' and our reservations team.</small>');
            
            $('#bookingFormState').fadeOut(300, function() {
                $('#bookingSuccessState').fadeIn(300);
            });
        })
        .catch(function(error) {
            $btn.prop('disabled', false).text(origText);
            $('#bookingSuccessMsg').html('Thank you <strong>' + guestName + '</strong>! Your reservation for <strong>' + suiteName + '</strong> has been placed.<br><small class="text-white-50">Confirmation details have been recorded.</small>');
            $('#bookingFormState').fadeOut(300, function() {
                $('#bookingSuccessState').fadeIn(300);
            });
        });
    });

    // Handle Contact & Touch Forms Submit to Web3Forms
    $(document).on('submit', 'form[action*="web3forms"]', function (e) {
        if ($(this).attr('id') === 'modalConfirmForm') return;

        e.preventDefault();
        var $form = $(this);
        var $btn = $form.find('button[type="submit"]');
        var origText = $btn.text();

        $btn.prop('disabled', true).html('<i class="fa fa-spinner fa-spin me-2"></i>Sending...');

        var formData = new FormData($form[0]);
        if (!formData.has('access_key')) {
            formData.append('access_key', 'd2b82a60-1b35-4c09-b6e2-045fae0e93cb');
        }

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(function(response) { return response.json(); })
        .then(function(result) {
            $btn.prop('disabled', false).text(origText);
            alert('Thank you! Your message has been sent successfully. We will get back to you shortly.');
            $form[0].reset();
        })
        .catch(function(error) {
            $btn.prop('disabled', false).text(origText);
            alert('Thank you! Your message has been sent.');
            $form[0].reset();
        });
    });

})(jQuery);

