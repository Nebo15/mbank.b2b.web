head.ready(function () {
    $('#feedbackForm').validate({
        highlight: function(input) {
            $(input).addClass('error');
        },
        errorPlacement: function(error, element){},
        submitHandler: function(form) {
            //return;
            $.ajax({
                url: form.action,
                type: form.method,
                data: $(form).serialize(),
                success: function(response) {
                    console.log(response);
                    if (response.success) alert('Спасибо за интерес к нашему продукту! Мы с вами свяжемся в ближайшее время.');
                    else alert('Что-то пошло не так. Попробуйте еще раз.','Ошибка');
                    $('#answers').html(response);
                }
            });
        }
    });
});