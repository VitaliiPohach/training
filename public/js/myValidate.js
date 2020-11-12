$('#registrationForm').validate({
    rules:{
        firstName:{
            required: true

        },
        lastName:{
            required: true

        },
        telnumber: {
            required: true
        },
        mail :{
            required: true,
            email: true
        },
        datepicker:{
            required:true
        },
        gender:{
            required: true
        },
        adress:{
            required: true
        }
    },
    messages:{
        telnumber:{
            required: "Поле обов'язкове для заповнення"
        },
        mail:{
            required: "Поле обов'язкове для заповнення",
            email: "Eлектронна пошта не коректна"
        },
        datepicker:{
            required:"Поле обов'язкове для заповнення"
        }
    }
});

$("#telnumber").inputmask("+38(999) 999-9999");
$.validator.addMethod("input_text", function(value, element) {
  return  /^[A-Za-zА-Яа-яІіЇїЙйЄє'\s-]{1,15}$/.test(value);
},
"Тільки букви і дефіс");
$.validator.addMethod("input_adress", function(value, element) {
  return  /^[\dA-Za-zА-Яа-яІіЇїЙйЄє'\s.,-]{1,200}$/.test(value);
},
"не спец символи");
