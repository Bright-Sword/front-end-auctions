import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@components/buttons/button';
import Modal from '@components/modal';

import { closeSignupModal } from '@actions/modals.actions';
import userActions from '@actions/user.actions';

import { getAccount } from '@selectors/user.selectors';

import styles from './styles.module.scss';
import { useSignMessage } from '@hooks/espa/user.hooks';

const ModalSignUp = ({ className, title, textForIcon, icon }) => {
  const dispatch = useDispatch();

  const account = useSelector(getAccount);
  const signMsg = useSignMessage(account);

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const handleClose = () => {
    dispatch(closeSignupModal());
  };

  const handleClick = () =>
    dispatch(userActions.tryToSignup(account, userName, email, signMsg));

  return (
    <>
      {createPortal(
        <Modal
          onClose={() => handleClose()}
          title={title}
          className={(className, styles.modalWrapper)}
        >
          <span>{`CURRENT ETH ADDRESS: ${
            account ? account : 'WALLET NOT CONNECTED'
          }`}</span>
          {!account && (
            <>
              <div className={styles.inputItem}>
                <label>USER ID</label>
                <input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className={styles.inputItem}>
                <label>EMAIL</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </>
          )}
          <Button
            className={styles.modalButton}
            background='black'
            onClick={() => handleClick()}
          >
            {account ? 'SIGN IN' : 'SIGN UP'}
          </Button>
        </Modal>,
        document.body
      )}
    </>
  );
};

ModalSignUp.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  textForIcon: PropTypes.string,
  icon: PropTypes.string,
};

ModalSignUp.defaultProps = {
  className: '',
  title: 'CREATE AN ACCOUNT',
  textForIcon: 'Metamask',
  icon: './images/icons/metamask.svg',
};

export default ModalSignUp;
