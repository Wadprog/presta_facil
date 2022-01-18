import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { isValidEmail } from '@helpers';
import Button, { VARIANT } from '@components/Button/Button.js';
import Image from '@components/Image/Image';
import BreadcrumbsSemanticMarkup from '@components/BreadcrumbsMarkup/BreadcrumbsMarkup';
import style from './BookPage.module.scss';
import { navigate } from 'gatsby';

const BookPage = ({ content, canonical, metatitle }) => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    consent: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitError, setSubmitError] = useState(null);
  const initialFormErrors = [];
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const submitFormUrl = process.env.GATSBY_DOWNLOAD_BOOK_FORM_URL;

  const {
    booktitle: bookPageTitle,
    bookdescription: bookPageDescription,
    consenttext: consentText,
    buttontext: buttonText,
    bookimage: bookImage,
    bookurl: bookPageUrl,
  } = content;
  const { dimensions } = bookImage;

  const validateForm = () => {
    const { firstName, lastName, email } = formData;
    const errors = [];

    if (!firstName.trim()) {
      errors.push('firstName');
    }
    if (!lastName.trim()) {
      errors.push('lastName');
    }
    if (!isValidEmail(email)) {
      errors.push('email');
    }

    setFormErrors(errors);
    return errors.length === 0;
  };

  const firstNameRef = useRef('firstName');
  const { current: firstNameCurrent } = firstNameRef;

  const lastNameRef = useRef('lastName');
  const { current: lastNameCurrent } = lastNameRef;

  const emailRef = useRef('emailName');
  const { current: emailCurrent } = emailRef;

  const firstNameInputClasses = classnames({
    [style.formInput]: !formErrors.includes(firstNameCurrent.id),
    [style.formInputError]: formErrors.includes(firstNameCurrent.id),
    [style.formInputFilled]: formData.firstName.trim() !== '',
  });

  const lastNameInputClasses = classnames({
    [style.formInput]: !formErrors.includes(lastNameCurrent.id),
    [style.formInputError]: formErrors.includes(lastNameCurrent.id),
    [style.formInputFilled]: formData.lastName.trim() !== '',
  });

  const emailInputClasses = classnames({
    [style.formInput]: !formErrors.includes(emailCurrent.id),
    [style.formInputError]: formErrors.includes(emailCurrent.id),
    [style.formInputFilled]: formData.email.trim() !== '',
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleConsentChange = ({ target: { name } }) => {
    const { consent: newsConsent } = formData;
    setFormData({ ...formData, [name]: !newsConsent });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(initialFormErrors);
    setSubmitError(null);
    const isValidForm = validateForm();
    if (isValidForm) {
      fetch(submitFormUrl, {
        method: 'POST',
        headers: {},
        body: new FormData(e.target),
      })
        .then(() => {
          setFormData(initialFormData);
          generateEmail();
          // window.location.href = bookPageUrl.text;
        })
        .catch((err) => {
          setSubmitError(err);
        });
    }
  };

  const generateEmail = () => {
    fetch('https://api-prod.secureprivacy.ai/api/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Body: `<!doctype html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Simple Transactional Email</title>
            <style>
              /* -------------------------------------
                  GLOBAL RESETS
              ------------------------------------- */
              
              /*All the styling goes here*/
              
              img {
                border: none;
                -ms-interpolation-mode: bicubic;
                max-width: 100%; 
              }
        
              body {
                background-color: #f6f6f6;
                font-family: sans-serif;
                -webkit-font-smoothing: antialiased;
                font-size: 14px;
                line-height: 1.4;
                margin: 0;
                padding: 0;
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%; 
              }
        
              table {
                border-collapse: separate;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                width: 100%; }
                table td {
                  font-family: sans-serif;
                  font-size: 14px;
                  vertical-align: top; 
              }
        
              /* -------------------------------------
                  BODY & CONTAINER
              ------------------------------------- */
        
              .body {
                background-color: #f6f6f6;
                width: 100%; 
              }
        
              /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
              .container {
                display: block;
                margin: 0 auto !important;
                /* makes it centered */
                max-width: 580px;
                padding: 10px;
                width: 580px; 
              }
        
              /* This should also be a block element, so that it will fill 100% of the .container */
              .content {
                box-sizing: border-box;
                display: block;
                margin: 0 auto;
                max-width: 580px;
                padding: 10px; 
              }
        
              /* -------------------------------------
                  HEADER, FOOTER, MAIN
              ------------------------------------- */
              .main {
                background: #ffffff;
                border-radius: 3px;
                width: 100%; 
              }
        
              .wrapper {
                box-sizing: border-box;
                padding: 20px; 
              }
        
              .content-block {
                padding-bottom: 10px;
                padding-top: 10px;
              }
        
              .footer {
                clear: both;
                margin-top: 10px;
                text-align: center;
                width: 100%; 
              }
                .footer td,
                .footer p,
                .footer span,
                .footer a {
                  color: #999999;
                  font-size: 12px;
                  text-align: center; 
              }
        
              /* -------------------------------------
                  TYPOGRAPHY
              ------------------------------------- */
              h1,
              h2,
              h3,
              h4 {
                color: #000000;
                font-family: sans-serif;
                font-weight: 400;
                line-height: 1.4;
                margin: 0;
                margin-bottom: 30px; 
              }
        
              h1 {
                font-size: 35px;
                font-weight: 300;
                text-align: center;
                 
              }
        
              p,
              ul,
              ol {
                font-family: sans-serif;
                font-size: 14px;
                font-weight: normal;
                margin: 0;
                margin-bottom: 15px; 
              }

              p.first-paragraph{
                margin-top: 15px; 
              }
                p li,
                ul li,
                ol li {
                  list-style-position: inside;
                  margin-left: 5px; 
              }
        
              a {
                color: #3498db;
                text-decoration: underline; 
              }
        
              /* -------------------------------------
                  BUTTONS
              ------------------------------------- */
              .btn {
                box-sizing: border-box;
                width: 100%; }
                .btn > tbody > tr > td {
                  padding-bottom: 15px; }
                .btn table {
                  width: auto; 
              }
                .btn table td {
                  background-color: #ffffff;
                  border-radius: 5px;
                  text-align: center; 
              }
                .btn a {
                  background-color: #ffffff;
                  border: solid 1px #3498db;
                  border-radius: 5px;
                  box-sizing: border-box;
                  color: #3498db;
                  cursor: pointer;
                  display: inline-block;
                  font-size: 14px;
                  font-weight: bold;
                  margin: 0;
                  padding: 12px 25px;
                  text-decoration: none;
                   
              }
        
              .btn-primary table td {
                background-color: #3498db; 
              }
        
              .btn-primary a {
                background-color: #3498db;
                border-color: #3498db;
                color: #ffffff; 
              }
        
              /* -------------------------------------
                  OTHER STYLES THAT MIGHT BE USEFUL
              ------------------------------------- */
              .last {
                margin-bottom: 0; 
              }
        
              .first {
                margin-top: 0; 
              }
        
              .align-center {
                text-align: center; 
              }
        
              .align-right {
                text-align: right; 
              }
        
              .align-left {
                text-align: left; 
              }
        
              .clear {
                clear: both; 
              }
        
              .mt0 {
                margin-top: 0; 
              }
        
              .mb0 {
                margin-bottom: 0; 
              }
        
              .preheader {
                color: transparent;
                display: none;
                height: 0;
                max-height: 0;
                max-width: 0;
                opacity: 0;
                overflow: hidden;
                mso-hide: all;
                visibility: hidden;
                width: 0; 
              }
        
              .powered-by a {
                text-decoration: none; 
              }
        
              hr {
                border: 0;
                border-bottom: 1px solid #f6f6f6;
                margin: 20px 0; 
              }
        
              /* -------------------------------------
                  RESPONSIVE AND MOBILE FRIENDLY STYLES
              ------------------------------------- */
              @media only screen and (max-width: 620px) {
                table.body h1 {
                  font-size: 28px !important;
                  margin-bottom: 10px !important; 
                }
                table.body p,
                table.body ul,
                table.body ol,
                table.body td,
                table.body span,
                table.body a {
                  font-size: 16px !important; 
                }
                table.body .wrapper,
                table.body .article {
                  padding: 10px !important; 
                }
                table.body .content {
                  padding: 0 !important; 
                }
                table.body .container {
                  padding: 0 !important;
                  width: 100% !important; 
                }
                table.body .main {
                  border-left-width: 0 !important;
                  border-radius: 0 !important;
                  border-right-width: 0 !important; 
                }
                table.body .btn table {
                  width: 100% !important; 
                }
                table.body .btn a {
                  width: 100% !important; 
                }
                table.body .img-responsive {
                  height: auto !important;
                  max-width: 100% !important;
                  width: auto !important; 
                }
              }
        
              /* -------------------------------------
                  PRESERVE THESE STYLES IN THE HEAD
              ------------------------------------- */
              @media all {
                .ExternalClass {
                  width: 100%; 
                }
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass span,
                .ExternalClass font,
                .ExternalClass td,
                .ExternalClass div {
                  line-height: 100%; 
                }
                .apple-link a {
                  color: inherit !important;
                  font-family: inherit !important;
                  font-size: inherit !important;
                  font-weight: inherit !important;
                  line-height: inherit !important;
                  text-decoration: none !important; 
                }
                #MessageViewBody a {
                  color: inherit;
                  text-decoration: none;
                  font-size: inherit;
                  font-family: inherit;
                  font-weight: inherit;
                  line-height: inherit;
                }
                .btn-primary table td:hover {
                  background-color: #34495e !important; 
                }
                .btn-primary a:hover {
                  background-color: #34495e !important;
                  border-color: #34495e !important; 
                } 
              }
        
            </style>
          </head>
          <body class="">
            <span class="preheader">Secure privacy e-book</span>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
              <tr>
                <td>&nbsp;</td>
                <td class="container">
                  <div class="content">
        
                    <!-- START CENTERED WHITE CONTAINER -->
                    <table role="presentation" class="main">
        
                      <!-- START MAIN CONTENT AREA -->
                      <tr>
                        <td class="wrapper">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td>
                                <p class="first-paragraph">Hi there ${
                                  formData.firstName
                                },</p>
                                <p> We received your request for downloading the E-Book about ${bookImage.alt.substring(
                                  0,
                                  4
                                )} </p>
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                                  <tbody>
                                    <tr>
                                      <td align="left">
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                          <tbody>
                                            <tr>
                                              <td> <a href="${
                                                bookPageUrl.text
                                              }" target="_blank">Download E-Book</a> </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p>We hope you will find this E-Book useful!</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
        
                    <!-- END MAIN CONTENT AREA -->
                    </table>
                    <!-- END CENTERED WHITE CONTAINER -->
        
                    <!-- START FOOTER -->
                    <div class="footer">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td class="content-block">
                            <span class="apple-link">We provide Data Privacy solutions for websites to become compliant with GDPR, CCPA, and LGPD laws. Fruebjergvej 3, 2100 Copenhagen, Denmark.</span>
                            <!--<br> Don't like these emails? <a href="http://i.imgur.com/CScmqnj.gif">Unsubscribe</a>.-->
                          </td>
                        </tr>
                        <tr>
                          <td class="content-block powered-by">
                            Powered by <a href="http://secureprivacy.ai">Secure Privacy</a>.
                          </td>
                        </tr>
                      </table>
                    </div>
                    <!-- END FOOTER -->
        
                  </div>
                </td>
                <td>&nbsp;</td>
              </tr>
            </table>
          </body>
        </html>`,
        Subject: 'Here is your Secure Privacy E-Book',
        To: formData.email.trim(),
      }),
    })
      .then(() => {
        navigate('/thank-you-book/');
        // window.location.href = bookPageUrl.text;
      })
      .catch((err) => {
        setSubmitError(err);
      });
  };

  return (
    <section className={style.bookPage}>
      <div className={style.container}>
        <Image className={style.bookImage} image={bookImage} />
        <div className={style.formGroup}>
          <h1 className={style.bookPageTitle}>{bookPageTitle.text}</h1>
          <p className={style.bookPageDescription}>
            {bookPageDescription.text}
          </p>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.formUserNames}>
              <div className={style.formInputWrapper}>
                <input
                  width={dimensions.width}
                  height={dimensions.height}
                  id="firstName"
                  name="firstName"
                  className={firstNameInputClasses}
                  type="text"
                  placeholder="First name"
                  onChange={handleInputChange}
                  ref={firstNameRef}
                />
                <span className={style.requiredMark}></span>
                <label className={style.label} htmlFor="firstName">
                  First name
                </label>
              </div>
              <div className={style.formInputWrapper}>
                <input
                  id="lastName"
                  name="lastName"
                  className={lastNameInputClasses}
                  type="text"
                  placeholder="Last name"
                  onChange={handleInputChange}
                  ref={lastNameRef}
                />
                <span className={style.requiredMark}></span>
                <label className={style.label} htmlFor="lastName">
                  Last name
                </label>
              </div>
            </div>
            <div className={style.formInputWrapper}>
              <input
                id="email"
                name="email"
                type="email"
                className={emailInputClasses}
                placeholder="Your email"
                onChange={handleInputChange}
                ref={emailRef}
              />
              <span className={style.requiredMark}></span>
              <label className={style.label} htmlFor="email">
                email
              </label>
            </div>
            <div className={style.checkboxWrapper}>
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleConsentChange}
              />
              <label htmlFor="consent" className={style.checkboxLabel}>
                {consentText.text}
              </label>
            </div>
            <div className={style.buttonWrapper}>
              <Button
                variant={VARIANT.PRIMARY}
                className={style.button}
                element="button"
                type="submit"
                fullWidth
              >
                {buttonText.text}
              </Button>
            </div>
            {formErrors.length > 0 && (
              <div className={style.errorMessage}>
                Please, check highlighted fields and try again!
              </div>
            )}
            {submitError && (
              <div className={style.errorMessage}>
                {`${submitError.message}. Please, try again later!`}
              </div>
            )}
          </form>
        </div>
        <BreadcrumbsSemanticMarkup
          pageTitle={metatitle.text}
          pageUrl={canonical.text}
        />
      </div>
    </section>
  );
};

BookPage.propTypes = {
  content: PropTypes.object.isRequired,
  canonical: PropTypes.object.isRequired,
  metatitle: PropTypes.object.isRequired,
};

export default BookPage;
