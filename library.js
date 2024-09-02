

document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    const resultContainer = document.getElementById("result-container");
    const body = document.body;

    function executeSearch() {
        body.style.backgroundImage = "url(https://img.freepik.com/free-vector/business-background-vector-blue-abstract-style_53876-126697.jpg?t=st=1725109787~exp=1725113387~hmac=0f49ce0d806453d5c1e1feb849d6596de46ebb028ef34938ee08942b5cd393ff&w=1380)";
        
        document.querySelectorAll(" h2, h3, p").forEach(element => {
            element.style.color = "black";
        });

        const query = searchInput.value.trim();

        if (query) {
            console.log("Searching for:", query);
            fetch(`https://openlibrary.org/search.json?q=${query}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Received data:", data);
                    displayResults(data); 
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    resultContainer.innerHTML = 'An error occurred while fetching data.';
                });
        } else {
            resultContainer.innerHTML = 'Please enter a book title, author, or genre to search.';
        }
    }

    searchButton.addEventListener("click", executeSearch);

    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            executeSearch();
        }
    });

    function displayResults(data) {
        resultContainer.innerHTML = ''; 
    
        if (data.docs && data.docs.length > 0) {
            data.docs.forEach(book => {
                const bookItem = document.createElement('div');
    
                const coverImageUrl = book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                    : 'https://openlibrary.org/assets/images/openlibrary-logo-tm.svg';
    
                // Get the description, if available
                const description = book.first_sentence && book.first_sentence.length > 0
                    ? book.first_sentence.join(' ')
                    : 'No description available.';
    
                bookItem.innerHTML = `
                    <div style="display: flex; align-items: center; margin-bottom: 20px; border: 1px solid #ddd; padding: 10px;">
                        <img src="${coverImageUrl}" alt="${book.title} cover" style="width: 100px; height: auto; margin-right: 20px;">
                        <div>
                            <h3 style="margin: 0; color: black;">${book.title}</h3>
                            <p style="margin: 5px 0; color: black;">Author: ${book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
                            <p style="margin: 5px 0; color: black;">First Published: ${book.first_publish_year || 'Unknown'}</p>
                            <p style="margin: 5px 0; color: black;">Description: ${description}</p>
                        </div>
                    </div>
                `;
                resultContainer.appendChild(bookItem);
            });
        } else {
            resultContainer.innerHTML = 'No results found.';
        }
    }
});

