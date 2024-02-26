import i18n from '@/translations/i18n';

const translation = i18n.t;

export function validateEmail(value: string) {
  if (value.length === 0) {
    return translation('login:email_empty');
  }
  const regExp = /^[+._\-\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regExp.test(value)) {
    return translation('login:email_error');
  }
  return '';
}

export function validatePassword(value: string) {
  const regexSpecialString =
    /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*()+=-?;,./{}|":<>[\]\\'-~_]{6,}$/;
  if (value.trim().length === 0) {
    return translation('login:password_empty');
  } else if (value.trim().length < 6) {
    return translation('login:password_length_error');
  } else if (!regexSpecialString.test(value.trim())) {
    return translation('login:password_format_error');
  } else {
    return '';
  }
}
