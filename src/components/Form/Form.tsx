import { useState } from 'react';
import './Form.scss';
import '@fortawesome/fontawesome-free/css/all.css';

import classNames from 'classnames';

export const FormContacts = () => {
  const [valueName, setValueName] = useState<string>('');
  const [valueEmail, setValueEmail] = useState<string>('');
  const [valueMessage, setValueMessage] = useState<string>('');

  const [hasNameError, setNameError] = useState<boolean>(false);
  const [hasEmailError, setEmailError] = useState<boolean>(false);
  const [hasMessageError, setMessageError] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!valueName.trim()) {
      setNameError(true)
    }

    if (!valueEmail.trim()) {
      setEmailError(true)
    }

    if (!valueMessage.trim()) {
      setMessageError(true)
    }

    if (!valueName || !valueEmail || !valueMessage) {
      return
    }

    setValueName('');
    setValueEmail('');
    setValueMessage('');
  }

  return (
    <form 
      action="#" 
      className="form"
      onSubmit={handleSubmit}
    >
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input 
            className={classNames('input', {
              'is-danger': hasNameError,
            })} 
            type="text" 
            placeholder="Your Name..."
            value={valueName}
            onChange={(event) => {
              setValueName(event.target.value)
              setNameError(false);
            }}
          />

          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>

          {!hasNameError ? (
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          ) : (
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          )}
        </div>

        {hasNameError && <p className="help is-danger">Please enter your name</p>}
      </div>

      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input 
            className={classNames('input', {
              'is-danger': hasEmailError,
            })} 
            type="email" 
            placeholder="Enter Email address..."
            value={valueEmail}
            onChange={(event) => {
              setValueEmail(event.target.value);
              setEmailError(false);
            }} 
          />

          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>

          {!hasEmailError ? (
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          ) : (
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          )}
        </div>

        {hasEmailError && <p className="help is-danger">This email is invalid</p>}
      </div>

      <div className="field">
        <div className="control">
          <textarea 
            className={classNames('textarea', {
              'is-danger': hasMessageError,
            })}
            placeholder="Enter your message..."
            value={valueMessage}
            onChange={(event) => {
              setValueMessage(event.target.value);
              setMessageError(false);
            }}
          ></textarea>
        </div>

        {hasMessageError && <p className="help is-danger">Enter some message</p>}
      </div>

      <button 
        type="submit" 
        className="form__submit"
      >
        submit
      </button>
		</form>
	)
}