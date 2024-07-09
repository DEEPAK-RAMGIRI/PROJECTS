$(document).ready(function() {
    let input = $("#screen");
    let buttons = $("button");
    let string = "";

    // Handle button clicks
    buttons.each(function() {
        $(this).click(function() {
            let value = $(this).text();
            handleInput(value);
        });
    });

    // Handle keyboard input
    $(document).keydown(function(event) {
        let key = event.key;
        if (key === 'Enter') {
            key = '=';
            event.preventDefault(); // Prevent default action of Enter key
        } else if (key === 'Backspace') {
            key = 'Del';
            event.preventDefault(); 
        }
        handleInput(key);
    });

    function handleInput(value) {
        if (value === '=') {
            try {
                string = eval(string);
                input.val(string);
            } catch (e) {
                input.val('Error');
                string = '';
            }
        } else if (value === 'AC') {
            string = "";
            input.val(string);
        } else if (value === 'Del') {
            string = string.slice(0, -1);
            input.val(string);
        } else if (/[0-9\+\-\*\/\.\%]/.test(value)) {
            string += value;
            input.val(string);
        }
    }
});
