let selectInput = document.getElementById('options-filter')

function handleSelectedItem(){
    const selectedItem = selectInput.options[selectInput.selectedIndex].value
    switch (selectedItem) {
        case 'cheap':
            const sortByAscending = productList
                .sort((a, b) => {
                    return a.price - b.price
                })
                .map((products) => {
                    return setFilteredContent(products);
                });
            setContentIntoHTML(sortByAscending)

            break;
        case 'expensive':
            const sortByDescending = productList
                .sort((a, b) => {
                    return b.price - a.price
                })
                .map((products) => {
                    return setFilteredContent(products);
                });
            setContentIntoHTML(sortByDescending)
            break;
        case '':
            const sortByNull = productList
                .sort(sortProducts)
                .map((products) => {
                    return setFilteredContent(products);
                });
            setContentIntoHTML(sortByNull)
            break;

        default:
            return;
    }
}

selectInput.addEventListener('change', handleSelectedItem);