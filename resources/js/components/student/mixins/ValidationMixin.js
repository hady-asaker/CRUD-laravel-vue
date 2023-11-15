const ValidationMixin = {
    name: 'ValidationMixin',
    data(){
        return{
            rules: {
                name: [
                    { required: true, message: 'Name is required', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value && value.length < 4) {
                                callback(new Error('Name must be at least 4 characters'));
                            } else {
                                callback();
                            }
                        },
                        trigger: 'blur',
                    },
                ],
                class: [
                    { required: true, message: 'Class is required', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value && value.length < 4) {
                                callback(new Error('Class must be at least 4 characters'));
                            } else {
                                callback();
                            }
                        },
                        trigger: 'blur',
                    },
                ],
                section: [
                    { required: true, message: 'Section is required', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value && value.length < 4) {
                                callback(new Error('Section must be at least 4 characters'));
                            } else {
                                callback();
                            }
                        },
                        trigger: 'blur',
                    },
                ],
                email: [
                    { required: true, message: 'Email is required', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value && value.length < 4) {
                                callback(new Error('Email must be at least 4 characters'));
                            } else {
                                callback();
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
