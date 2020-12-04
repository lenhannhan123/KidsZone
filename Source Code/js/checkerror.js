$(document).ready(function(){
    $('#contactForm').bootstrapValidator({
        container: '#messages',
        excluded: ':disabled',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {

          user:{
                validators:{
                    notEmpty: {
                        message: 'User Name is required and cannot be empty'
                    }
                }
            
            },

            email:{
                validators:{
                    notEmpty: {
                        message: 'Mail is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^\w+[@]\w+[.]\w+([.]\w{2})?$/,
                        message: 'The email address is not valid'
                    }
                }
            
            },
            password:{
                validators: {
                    notEmpty: {
                        message: 'Password is required and cannot be empty'
                    },
                    stringLength: {
                        min: 5,
                        message: 'Password has at least 5 characters'
                    },
                    regexp: {
                        regexp: /^(\w+[0-9]+|([0-9]+\w+))$/i,
                        message: 'Password must contain both alphabet characters and numbers'
                    }
                }

            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please insert your phone number'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/i,
                        message: 'Phone contains number (0-9) only'
                    }
                }
            },
        
        
        }


  });
});



$(document).ready(function(){
    $('#loginform').bootstrapValidator({
        container: '#messages',
        excluded: ':disabled',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {

          user1:{
                validators:{
                    notEmpty: {
                        message1: 'User Name is required and cannot be empty'
                    }
                }
            
            },
            password1:{
                validators: {
                    notEmpty: {
                        message1: 'Password is required and cannot be empty'
                    },
                    stringLength: {
                        min: 5,
                        message1: 'Password has at least 5 characters'
                    },
                    regexp: {
                        regexp: /^(\w+[0-9]+|([0-9]+\w+))$/i,
                        message1: 'Password must contain both alphabet characters and numbers'
                    }
                }

            },

        }


  });
});