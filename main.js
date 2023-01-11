$(document).ready(function(){
    $('form').on('submit',function(e) {
        e.preventDefault();
        const TarefaNova = $('#NovaTarefa').val();
        const listaTarefa = $('<li></li>');
        $(`<li>${TarefaNova}</li>`).appendTo(listaTarefa);
        $(listaTarefa).appendTo('ul');
        
        $('li').click(function() {
            $(this).addClass('lista');
        });
        
        });
    });