const generateValidationRule = (fieldName, length) => [
    { required: true, message: `${fieldName} is required`, trigger: 'blur' },
    {
        validator: (rule, value, callback) => {
            if (value && value.length < length) {
                callback(new Error(`${fieldName} must be at least ${length} characters`));
            } else {
                callback();
            }
        },
        trigger: 'blur',
    },
];


const ValidationMixin = {
    name: 'ValidationMixin',
    data(){
        return{
            rules: {
                name: generateValidationRule('Name', 4),
                class: generateValidationRule('Class', 4),
                section: generateValidationRule('Section', 4),
                email: [
                    { required: true, message: 'Email is required', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (!value) {
                                callback(new Error('Please enter an email address'));
                            } else {
                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                if (!value.includes('@')) {
                                    callback(new Error('Email address must contain "@" symbol'));
                                } else if (!emailRegex.test(value)) {
                                    callback(new Error('Please enter a valid email address'));
                                } else if (value && value.length > 20) {
                                    callback(new Error('Email must be lass than 10 characters'));
                                } else {
                                    callback();
                                }
                            }
                        },
                        trigger: 'blur',
                    },
                ],
            },

        };
    },
    methods: {
        validateName() {
            this.$refs.studentForm.validateField('name');
        },
        validateClass() {
            this.$refs.studentForm.validateField('class');
        },
        validateSection() {
            this.$refs.studentForm.validateField('section');
        },
        validateEmail() {
            this.$refs.studentForm.validateField('email');
        },

    }
}

export default ValidationMixin;
