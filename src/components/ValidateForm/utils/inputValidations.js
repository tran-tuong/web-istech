export const name_validation = {
    name: 'name',
    label: 'Name:',
    type: 'text',
    id: 'name',
    placeholder: 'Write your name ...',
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

  export const class_validation = {
    name: 'class',
    label: 'Class:',
    type: 'text',
    id: 'class',
    placeholder: 'Write your class ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 12,
        message: '12 characters max',
      },
    },
  }
  
  export const desc_validation = {
    name: 'description',
    label: 'Description:',
    multiline: true,
    id: 'description',
    placeholder: 'Write description ...',
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
    label: 'Email address',
    type: 'email',
    id: 'email',
    placeholder: 'Your email address',
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