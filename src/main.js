document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.abas__tabs__button');
    const tabLists = document.querySelectorAll('.abas__list');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab-button');

            tabButtons.forEach(btn => btn.classList.remove('abas__tabs__button--active'));
            button.classList.add('abas__tabs__button--active');

            tabLists.forEach(list => {
                if (list.getAttribute('data-tab-id') === tabId) {
                    list.classList.add('abas__list--active');
                } else {
                    list.classList.remove('abas__list--active');
                }
            });
        });
    });
});
