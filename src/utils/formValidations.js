const EMAIL_VALIDATION = {
    maxLength: {
      value: 150,
      message: "You can only enter up to 150 characters"
    },
    minLength: {
      value:1,
      message: "Enter at least 1 character"
    },
    required : {
      value: true,
      message: "This field is required"
    },
    pattern: {
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Enter a email valid"
    }
  }

const PASSWORD_VALIDATION = {
    maxLength: {
      value: 25,
      message: "You can only enter up to 25 characters"
    },
    minLength: {
      value:6,
      message: "Enter at least 6 character"
    },
    required : {
      value: true,
      message: "This field is required"
    }
  }

const FIRST_NAME_VALIDATION = {
    maxLength: {
      value: 25,
      message: "You can only enter up to 25 characters"
    },
    minLength: {
      value:1,
      message: "Enter at least 1 character"
    },
    required : {
      value: true,
      message: "This field is required"
    }
  }  
  
const LAST_NAME_VALIDATION = {
    maxLength: {
      value: 25,
      message: "You can only enter up to 25 characters"
    },
    minLength: {
      value:1,
      message: "Enter at least 1 character"
    },
    required : {
      value: true,
      message: "This field is required"
    }
  }

const BIRTHDAY_VALIDATION = {
    required : {
      value: true,
      message: "This field is required"
    }
  }

const IMG_VALIDATION = {
    required : {
      value: true,
      message: "This field is required"
    }
  }


export {
    EMAIL_VALIDATION,
    PASSWORD_VALIDATION,
    FIRST_NAME_VALIDATION,
    LAST_NAME_VALIDATION,
    BIRTHDAY_VALIDATION,
    IMG_VALIDATION
}