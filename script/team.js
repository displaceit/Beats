const openItem = item => {
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__content");
    const textBlock = contentBlock.find(".team__content-block");
    const reqHeight = textBlock.height();
    const arrowDown = $('.team__title-arrow');

    container.addClass("active");
    contentBlock.height(reqHeight);
    arrowDown.addClass('team__title-arrow-active');
}

const closeEveryItem = container => {
    const items = container.find(".team__content");
    const itemContainer = container.find(".team__item");
    const arrowUp = container.find('.team__title-arrow');

    itemContainer.removeClass("active");
    items.height(0);
    arrowUp.removeClass('team__title-arrow-active');
}

$('.team__title').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest(".team");
    const elemContainer = $this.closest(".team__item");

    if (elemContainer.hasClass("active")) {
        closeEveryItem(container);

    } else {
        closeEveryItem(container);
        openItem($this);
    }
})

