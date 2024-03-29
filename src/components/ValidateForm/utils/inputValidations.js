export const name_validation = {
    name: 'name',
    label: 'Tên của bạn*:',
    type: 'text',
    id: 'name',
    placeholder: 'Nguyễn Văn A ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
  }

  export const subject_validation = {
    name: 'subject',
    label: 'Ngành/Lớp:',
    type: 'text',
    id: 'subject',
    placeholder: 'ICE2021A ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 100,
        message: '100 characters max',
      },
    },
  }
  
  export const message_validation = {
    name: 'message',
    label: 'Nội dung*:',
    multiline: true,
    id: 'message',
    placeholder: 'Nội dung...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 200,
        message: '200 characters max',
      },
    },
  }
  
  export const password_validation = {
    name: 'password',
    label: 'Password:',
    type: 'password',
    id: 'password',
    placeholder: 'type password ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      minLength: {
        value: 6,
        message: 'min 6 characters',
      },
    },
  }
  
  export const num_validation = {
    name: 'num',
    label: 'Number:',
    type: 'number',
    id: 'num',
    placeholder: 'write a random number',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
    },
  }
  
  export const email_validation = {
    name: 'email',
    label: 'Địa chỉ email*:',
    type: 'email',
    id: 'email',
    placeholder: 'Địa chỉ email của bạn',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'not valid',
      },
    },
  }