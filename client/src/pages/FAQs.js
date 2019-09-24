import React, { Component } from "react";

class FAQs extends Component {
  state = {};
  render() {
    return (
      <div id="faqs">
        <h3>FAQs</h3>

        <hr />

        <h4>What Are Your Shipping & Delivery Practices?</h4>
        <p>
          <strong>All product is shipped at 56°.</strong> It&rsquo;s not just
          hype; it&rsquo;s what we do to guarantee quality. Every wine is
          shipped under perfect temperature-control. If you want to arrange a
          tour of our facility, BRING A JACKET! It&rsquo;s always 56°.
        </p>

        <p>
          Because wine is a perishable, we recommend against shipping wine
          during the months of May through October for temperature
          considerations. For orders under $200, shipping charges will be added
          to your order and will vary depending on your ship-to locations.
        </p>

        <p>
          We arrange for deliveries Monday through Friday. We cannot guarantee a
          precise date of delivery, but we will do our best to accommodate
          requests. Please call 888-DRINK-CWC for information on Saturday
          deliveries.
        </p>

        <p>
          Alcoholic beverages may be sold and delivered only to persons who are
          at least 21 years old. In placing your order, you represent to us that
          you are at least 21 years old and that the person to whom the delivery
          will be made is at least 21 years old. All shipments require an adult
          signature on receipt. Whenever possible, we recommend that shipments
          be made to a business address.
        </p>

        <br />
        <hr />
        <h4>
          <em>Can You Ship Anywhere?</em>
        </h4>
        <p>
          <strong>We CANNOT currently ship to the following states:</strong>
          <ul>
            <li id="contact">• Alabama</li>
            <li id="contact">• Arkansas</li>
            <li id="contact">• Delaware</li>
            <li id="contact">• Mississippi</li>
            <li id="contact">• Utah</li>
            <li id="contact">• West Virginia</li>
          </ul>
        </p>

        <p>
          By requesting that your wine be shipped to you, you are authorizing us
          to engage UPS to deliver your wine on your behalf.
          <strong>
            Ownership of wine purchased from California Wine Cooperative changes
            hands at the time of purchase. If you have more questions about
            shipping wine, please call us at 888-DRINK-CWC.
          </strong>
        </p>

        <br />
        <hr />
        <h4>What Are Your Return/Refund Policies?</h4>
        <p>
          Your satisfaction with California Wine Cooperative is extremely
          important, and we will make every effort to make sure you&rsquo;re
          happy with the wines you purchase from us. Because wine is a
          perishable product, there is no need for you to return it to us. All
          we ask is that you contact us directly by phone or email to initiate a
          refund.
        </p>

        <p>
          Once your refund request is received we will notify you of the
          approval or rejection of your refund. If you are approved, then your
          refund will be processed, and a credit will automatically be applied
          to your credit card or original method of payment, within two days. We
          will send all confirming information to you regarding the date the
          refund was issued, as well as copies of receipts whether by mail or
          email, whichever is most convenient to you.
        </p>

        <th>We&rsquo;re available 7 days a week.</th>
        <ul>
          <li id="contact">• Mon - Fri 10AM – 8PM</li>
          <li id="contact">• Sat 9AM – 8PM</li>
          <li id="contact">• Sun 12PM – 4PM</li>
          <li id="contact">• Phone: 888-POUR-CWC</li>
          <li id="contact">• Email: info@cwc.com</li>
        </ul>
      </div>
    );
  }
}

export default FAQs;
