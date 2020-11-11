$('#registrationForm').validate({
	rules:{
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
vital#@)(?$0