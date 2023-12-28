import { FormContacts } from '../../components/Form';
import './Contacts.scss';

export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__letter"></div>

      <h1 className="contacts__title">
        Have Questions? We Have answers!
      </h1>

      <p className="contacts__text">
        If you want to inquire about our services, make an appointment or have any questions about what we do, just fill out the form below and we will reach out to you in the next 24 hours!
      </p>

      <FormContacts />

      <div className="footer__contacts">
          <div className="footer__contact">
            <div className="footer__icon footer__icon--address"></div>

            <div className="footer__name">
              addres
            </div>

            <div className="footer__connection">
              98 Healey Rd, Bolton, ON. L7E 5A7, Canada.
            </div>
          </div>

          <div className="footer__contact">
            <div className="footer__icon footer__icon--email"></div>

            <div className="footer__name">
              email
            </div>

            <div className="footer__connection">
              info@zodiacengineering.ca
            </div>
          </div>

          <div className="footer__contact">
            <div className="footer__icon footer__icon--phone"></div>

            <div className="footer__name">
              phone
            </div>

            <div className="footer__connection">
              647-995-6255
            </div>
          </div>

          <div className="footer__contact">
            <div className="footer__icon footer__icon--phone"></div>

            <div className="footer__name">
              phone
            </div>

            <div className="footer__connection">
              416-712-1241
            </div>
          </div>
        </div>
    </div>
  )
}