import React from "react";
import images from "../../assets/img/images";
import icons from "../../assets/icons/icons";

const TermsSection = () => {
  const makeupClass = [
    "Makeup classes will be provided only with prior notice.",
    "Without advance notice, makeup classes will not be offered.",
    "Students are expected to be punctual and regular in their classes.",
    "Makeup classes will only be granted under special circumstances and with prior intimation.",
    "If you are unable to attend a class, inform us via Email, WhatsApp, or our Support Team at least 1 day in advance to reschedule.",
  ];

  const feesPayment = [
    "Fees are charged in advance on a monthly basis, not per lesson.",
    "Payment must be made within 10 days of invoice generation; otherwise, a late fee will be charged.",
    "Fees are structured to cover technical expenses, teacher salaries, and operational costs.",
    "Payments can be made via Visa/MasterCard, PayPal, Zelle, Western Union, or direct bank transfer. If none of these methods work, kindly inform us.",
  ];
  const discount = [
    "Discounts are available only for advance payments for quarterly, half-yearly, or yearly billing cycles.",
    "If payment is not made within 10 days, discounts will be canceled, and a 10% late payment fee will be applied.",
  ];
  const impNotes = [
    "Fees are charged on a monthly basis, not per lesson/class.",
    "4.5% tax/transaction charges apply to the total monthly fee.",
    "Fees will not be reduced for missed classes unless prior notice has been given.",
    "Classes will be paused if fees remain unpaid for more than 10 days.",
    "Card Payments will appear under our parent company name: PrismSolutionsllc.",
  ];
  const cancellation = [
    "To cancel classes, students/parents must inform us 15 days in advance by emailing support@emantime.com",
    "Failure to notify may result in continued invoicing until the cancellation is confirmed.",
  ];
  const publicHoliday = [
    "4 days for Eid-ul-Fitr",
    "4 days for Eid-ul-Adha",
    "1st May (Labor Day)",
  ];

  return (
    <div className="w-full px-6 pb-12 overflow-x-hidden relative">
      <div className={`max-w-[1600px] mx-auto flex flex-col gap-12`}>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8">
          {/* Left Column - First Section */}
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-24 gap-6">
            <div className="space-y-4  order-1">
              <div className="">
                <h2 className="flex items-center md:text-2xl text-xl font-semibold mb-5 text-gradThree">
                  <span className=" mr-2">1.</span>
                  Free Trial Classes
                </h2>
                <p className="text-black md:text-base text-sm leading-relaxed">
                  We are confident you’ll love our service, which is why we
                  offer 3 days of free trial classes. After the trial period,
                  you can continue by paying the monthly fee, which must be paid
                  in advance.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-24 gap-6">
            <div className="md:block hidden"></div>

            <div className="space-y-4 order-2">
              <h2 className="flex items-center md:text-2xl text-xl font-semibold mb-5 text-gradThree">
                <span className="mr-2">2.</span>
                Makeup Classes
              </h2>
              <ul className="flex flex-col gap-4">
                {makeupClass.map((makeup, i) => (
                  <div className="flex gap-3 items-center" key={i}>
                    <div className="flex-shrink-0">
                      <img src={icons.check} alt="" width={20} />
                    </div>
                    <li className="text-black md:text-base text-sm">
                      {makeup}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-24 gap-6">
            <div className="space-y-4 order-1">
              <div className="">
                <h2 className="flex items-center md:text-2xl text-xl font-semibold mb-5 text-gradThree">
                  <span className=" mr-2">3.</span>
                  Reports
                </h2>
                <p className="text-black md:text-base text-sm leading-relaxed">
                  Parents will receive monthly progress reports, giving insights
                  into their child’s learning progress.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-24 gap-6">
            <div className="md:block hidden"></div>

            <div className="space-y-4 ">
              <div className="">
                <h2 className="flex items-center md:text-2xl text-xl font-semibold mb-5 text-gradThree">
                  <span className="mr-2">4.</span>
                  Fees Payment
                </h2>
                <ul className="flex flex-col gap-4">
                  {feesPayment.map((makeup, i) => (
                    <div className="flex gap-3 items-center" key={i}>
                      <div className="flex-shrink-0">
                        <img src={icons.check} alt="" width={20} />
                      </div>
                      <li className="text-black md:text-base text-sm">
                        {makeup}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-24 gap-6">
            <div className="space-y-4 order-1">
              <div className="">
                <h2 className="flex items-center md:text-2xl text-xl font-semibold mb-5 text-gradThree">
                  <span className="mr-2">5.</span>
                  Discount
                </h2>
                <ul className="flex flex-col gap-4">
                  {discount.map((makeup, i) => (
                    <div className="flex gap-3 items-center" key={i}>
                      <div className="flex-shrink-0">
                        <img src={icons.check} alt="" width={20} />
                      </div>
                      <li className="text-black md:text-base text-sm">
                        {makeup}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-24 gap-6">
            <div className="md:block hidden"></div>

            <div className="space-y-4 order-2">
              <div className="">
                <h2 className="flex items-center md:text-2xl text-xl font-semibold mb-5 text-gradThree">
                  <span className="mr-2">6.</span>
                  Important Notes
                </h2>
                <ul className="flex flex-col gap-4">
                  {impNotes.map((makeup, i) => (
                    <div className="flex gap-3 items-center" key={i}>
                      <div className="flex-shrink-0">
                        <img src={icons.check} alt="" width={20} />
                      </div>
                      <li className="text-black md:text-base text-sm">
                        {makeup}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-24 gap-6">
            <div className="space-y-4 ">
              <div className="">
                <h2 className="flex items-center md:text-2xl text-xl font-semibold mb-5 text-gradThree">
                  <span className="mr-2">7.</span>
                  Leaves
                </h2>
                <p className="text-black md:text-base text-sm leading-relaxed">
                  Leave requests must be submitted at least 1 week in advance.
                  To reserve a teacher’s slot/timing during leave, 50% of the
                  monthly fee will be charged. If the slot is not reserved, the
                  teacher may be reassigned upon resumption of classes.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-24 gap-6">
            <div className="md:block hidden"></div>

            <div className="space-y-4">
              <div className="">
                <h2 className="flex items-center md:text-2xl text-xl font-semibold mb-5 text-gradThree">
                  <span className="mr-2">8.</span>
                  Annual Fee Adjustment
                </h2>
                <p className="text-black md:text-base text-sm leading-relaxed">
                  An annual fee increase of $2.25 per student or 5% increase
                  will apply every January to account for teacher salary
                  appraisals.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-24 gap-6">
            <div className="space-y-4 ">
              <div className="">
                <h2 className="flex items-center md:text-2xl text-xl font-semibold mb-5 text-gradThree">
                  <span className="mr-2">9.</span>
                  Cancellation
                </h2>
                <ul className="flex flex-col gap-4">
                  {cancellation.map((makeup, i) => (
                    <div className="flex gap-3 items-center">
                      <div className="flex-shrink-0">
                        <img src={icons.check} alt="" width={20} />
                      </div>
                      <li className="text-black md:text-base text-sm">
                        {makeup}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-24 gap-6">
            <div className="md:block hidden"></div>
            <div className="space-y-4 ">
              <div className="">
                <h2 className="flex items-center md:text-2xl text-xl font-semibold mb-5 text-gradThree">
                  <span className="mr-2">10.</span>
                  Public Holidays
                </h2>
                <ul className="flex flex-col gap-4">
                  <p className="text-black md:text-base text-sm leading-relaxed">
                    The institute will remain closed on the following public
                    holidays
                  </p>
                  {publicHoliday.map((makeup, i) => (
                    <div className="flex gap-3 items-center" key={i}>
                      <div className="flex-shrink-0">
                        <img src={icons.check} alt="" width={20} />
                      </div>
                      <li className="text-black md:text-base text-sm">
                        {makeup}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm">
          <p className="text-black lg:text-xl md:text-lg text-base md:max-w-5xl mx-auto">
            Thank you for choosing EmanTime Academy! We look forward to serving
            you with  the best Quranic education.For further queries, feel free
            to contact our support team
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsSection;
