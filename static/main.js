$(document).ready(() => {

    update()
    
    $('#add-todo').click(() => {
        var text = $('#todo-text').val();
        if(text != '') {
            addTodo(text);
            $('#todo-text').val('');
        } 
    });

    $('#check-all-todo').click(() => {
        checkAll();
    })
});

function update() {
    $('#todo-items').html('');
    $.get( "todo", function( data ) {
        data.forEach((item) => {
            createTodoElement(item[0], item[2], item[1]);
        })
    });
}

function addTodo(text) {
    $.post( "todo", {todo: text}, function( data ) {
        update()
    });
}

function deleteTodo(id) {
    $.post( "todo/delete/" + id, function( data ) {
        if(data) {
            update();
        }
    });
}

function checkTodo(id, checked) {
    let checkedVal =  checked ? 1 : 0;
    $.post( "todo/" + id, {checked: checkedVal}, function( data ) {
        if(data) {
            update()
        }
    });
}

function  checkAll() {
    $.get( "todo", function( data ) {
        let itemsCount = data.length;
        let counter = 0;
        data.forEach((item) => {
            $.post( "todo/" + item[0], {checked: 1}, function( data ) {
                counter++;
                if(counter >= itemsCount) {
                    update();
                }
            });
        });
    });
}

function createTodoElement(id, text, checked) {
    var listEl = $('<li class="list-group-item"></li>');
    listEl.html('<span>'+text+'</span>');
    var checkBtn = $('<button type="button" data-todoId="'+ id +'" class="todo-check btn btn-sm btn-outline-primary ml-4 mr-1"><span class="oi oi-check"></span></button> ');
    var trashBtn = $('<button type="button" data-todoId="'+ id +'" class="todo-trash btn btn-sm btn-outline-danger"><span class="oi oi-trash"></span></button> ');
    listEl.append(checkBtn, trashBtn);

    if(checked) {
        listEl.addClass('checked');
    } else {
        listEl.removeClass('checked');
    }

    trashBtn.click((e) => { 
        var id = trashBtn.attr('data-todoId');
        deleteTodo(id);
    });

    checkBtn.click((e) => {
        var id = checkBtn.attr('data-todoId');
        let hasClass = checkBtn.parent().hasClass('checked');

        console.log(hasClass)
        if(hasClass) {
            checkTodo(id, false);
        } else {
            checkTodo(id, true);
        }
    });

    $('#todo-items').append(listEl);
}