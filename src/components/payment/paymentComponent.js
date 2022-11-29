import React from 'react'
import paymentCSS from './payment.module.css'
function PaymentComponent() {
  return (
    <div>
        <div class={`${paymentCSS.container} ${paymentCSS.p-0}`}>
      <div class={`${paymentCSS.card} ${paymentCSS.px-4}`}>
          <p class={`${paymentCSS.h8}${paymentCSS.py-3}`}>Payment Details</p>
          <div class={`${paymentCSS.row}${paymentCSS.gx-3}`}>
              <div class={paymentCSS.col-12}>
                  <div class="d-flex flex-column">
                      <p class={`${paymentCSS.text}${paymentCSS.mb-1}`}>Person Name</p>
                      <input class={`${paymentCSS.mb-3}`} type="text" placeholder="Name" value=""/>
                  </div>
              </div>
              <div class={paymentCSS.col-12}>
                  <div class="d-flex flex-column">
                      <p class={`${paymentCSS.text}${paymentCSS.mb-1}`}>Card Number</p>
                      <input class="form-control mb-3" type="text" placeholder="1234-5678-4356"/>
                  </div>
              </div>
              <div class={paymentCSS.col-6}>
                  <div class="d-flex flex-column">
                      <p class={`${paymentCSS.text}${paymentCSS.mb-1}`}>Expiry</p>
                      <input class="form-control mb-3" type="text" placeholder="MM/YYYY"/>
                  </div>
              </div>
              <div class={paymentCSS.col-6}>
                  <div class="d-flex flex-column">
                      <p class={`${paymentCSS.text}${paymentCSS.mb-1}`}>CVV/CVC</p>
                      <input class="form-control mb-3 pt-2 " type="password" placeholder="***"/>
                  </div>
              </div>
              <div class={paymentCSS.col-12}>
                <div class={paymentCSS.btn}>
                    <span class="ps-3" id="finalSeats"></span>
                </div>
            </div>
              <div class={paymentCSS.col-12}>
                  <div class="btn btn-primary mb-3">
                     <span class="ps-3" id="finalPrice"></span>
                  </div>
              </div>
              <div class={paymentCSS.col-12}>
                  <div class="btn btn-primary mb-3">
                     <a href="./successfull.html">Pay</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="btnnew">
    <button>
      <a href="./seatBooking.html">Go back to Seat Selction</a>
    </button>
  </div>
    </div>
  )
}

export default PaymentComponent