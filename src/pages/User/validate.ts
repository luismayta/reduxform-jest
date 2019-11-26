import { FormErrors } from 'redux-form';
import { AddUserParams } from './AddUser.d';

const validate = (
  values: AddUserParams,
): FormErrors<AddUserParams> => {
  const errors: FormErrors<AddUserParams> = {};
  if (!values.userName) {
    errors.userName = 'User name required';
  }
  if (!values.userDOB) {
    errors.userDOB = 'DOB required';
  }
  if (!values.userGender) {
    errors.userGender = 'Gender required';
  }

  if (!values.userMobileNumber) {
    errors.userMobileNumber = 'Mobile Number required';
  }

  if (!values.userAddress) {
    errors.userAddress = 'Address Number required';
  }
  if (!values.userAccountNumber) {
    errors.userAccountNumber = 'Account number required';
  }

  if (!values.userBankName) {
    errors.userBankName = 'Bank Name required';
  }

  if (!values.userBankAddress) {
    errors.userBankAddress = 'Bank Address required';
  }
  return errors;
};

export default validate;
