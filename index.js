/* Adds a new item to the list by appending the current list with an HTML block that includes the
submitted item name and the buttons that will be used in the other two functions */
$(function() {
    $("#js-shopping-list-form").submit(event => {
        event.preventDefault();
        $(".shopping-list").append('<li>' +
            '<span class="shopping-item">' +
                $(event.currentTarget).find("input[name='shopping-list-entry']").val() +
            '</span>' +
            '<div class="shopping-item-controls">' +
                '<button class="shopping-item-toggle">' +
                    '<span class="button-label">check</span>' +
                '</button>' + " " +
                '<button class="shopping-item-delete">' +
                    '<span class="button-label">delete</span>' +
                '</button>' +
            '</div>' +
            '</li>');
        $("#shopping-list-entry").val("");
    });
});

/* Listens for the "delete" button to be clicked, then removes the parent list item */
$(function() {
    $(".shopping-list").on("click", ".shopping-item-delete", event => {
        event.preventDefault();
        $(event.currentTarget).closest("li").remove();
    });
});

/* Adds and removes ".shopping-item__checked" when clicking the "check" button */
$(function() {
    $(".shopping-list").on("click", ".shopping-item-toggle", event => {
        event.preventDefault();
        $(event.currentTarget).closest("li").find("span").first().toggleClass("shopping-item__checked");
    });
});
