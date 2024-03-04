import i18n from '@/translations/i18n';

const translation = i18n.t;

export function validateEmail(value: string) {
  if (value.length === 0) {
    return translation('auth:email_empty');
  }
  const regExp = /^[+._\-\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regExp.test(value)) {
    return translation('auth:email_error');
  }
  return '';
}

export function validateFullName(value: string) {
  const regexDisplayString =
    /[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+/;
  if (value.trim().length === 0) {
    return translation('auth:fullname_empty');
  } else if (value.trim().length < 6) {
    return translation('auth:fullname_length_error');
  } else if (regexDisplayString.test(value.trim())) {
    return translation('auth:fullname_format_error');
  } else {
    return '';
  }
}

export function validatePassword(value: string) {
  const regexSpecialString =
    /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*()+=-?;,./{}|":<>[\]\\'-~_]{6,}$/;
  if (value.trim().length === 0) {
    return translation('auth:password_empty');
  } else if (value.trim().length < 6) {
    return translation('auth:password_length_error');
  } else if (!regexSpecialString.test(value.trim())) {
    return translation('auth:password_format_error');
  } else {
    return '';
  }
}
