## Library Website Documentation

This documentation provides an overview of the library website, including its structure, functionality, and the accompanying CSS and JavaScript files.

**1. `library.html` - Main HTML Structure**

*   **DOCTYPE declaration:** Defines the document type as HTML5.
*   **HTML tag:** Contains the root of the HTML document.
*   **Head section:**
    *   **Meta charset:** Specifies the character encoding for the document as UTF-8.
    *   **Meta viewport:** Sets the viewport properties for responsiveness.
    *   **Title:** Defines the title of the HTML document, displayed in the browser tab.
    *   **Link to CSS:** Includes the `library.css` file for styling the website.
*   **Body section:** Contains the visible content of the website.
    *   **Header:**
        *   **H1 heading:** Displays the website title - "Welcome to Aur Library".
        *   **Navigation (nav):**
            *   **Unordered list (ul):** Contains navigation links for accessing different sections of the website.
            *   **List items (li):** Each link is an anchor tag (`<a>`) with a `href` attribute referencing the relevant section ID.
    *   **Main:**
        *   **Section class="code":**
            *   **H2 heading:** Displays the welcome message - "Your Gateway to Knowledge".
            *   **Paragraph:** Contains a brief description of the library.
            *   **Button:** A link to the "Explore Books" section.
        *   **Section id="search":**
            *   **H2 heading:** "Search for Books".
            *   **Input field:** Allows users to enter search terms.
            *   **Button:** Triggers the search functionality.
            *   **Div id="result-container":** Displays the search results.
        *   **Section id="info":**
            *   **H2 heading:** "About Our Library".
            *   **Paragraph:** Provides information about the library.
        *   **Section id="contact":**
            *   **H2 heading:** "Contact Us".
            *   **Paragraphs:** Displays contact information (email and phone number).
    *   **Footer:**
        *   **Paragraph:** Contains copyright information.
    *   **Script tag:** Includes the `library.js` file for adding interactivity.

**2. `library.css` - Styling and Layout**

*   **Reset styles:** Resets default browser styles for elements like margins and padding.
*   **Body styles:**
    *   Sets font family, line height, and background image for the entire page.
    *   `background-size: cover;` ensures the background image covers the entire page.
*   **Header styles:**
    *   Sets background color, text color, padding, and text alignment.
*   **Navigation styles:**
    *   Removes bullet points from the list.
    *   Sets list item display as inline for horizontal alignment.
    *   Styles the anchor tags for navigation links.
*   **Section styles:**
    *   `code` section: Sets background color, text color, padding, and text alignment.
    *   Search, info, and contact sections: Sets margin-bottom for spacing.
*   **Search input and button styles:**
    *   Sets padding, width, border, and border-radius for the input field.
    *   Sets padding, background color, text color, border, border-radius, and font size for the button.
*   **Button hover effects:**
    *   Changes background color on hover for both the search button and the main button.
*   **Footer styles:**
    *   Sets background color, text color, text alignment, and padding.

**3. `library.js` - JavaScript Functionality**

*   **DOMContentLoaded event listener:** Ensures the code runs after the HTML document is fully loaded.
*   **Variable declarations:**
    *   `searchButton`: References the search button element.
    *   `searchInput`: References the search input element.
    *   `resultContainer`: References the div where search results will be displayed.
    *   `body`: References the body element.
*   **`executeSearch` function:**
    *   Retrieves the search query from the input field.
    *   Performs a fetch request to the Open Library API using the search query.
    *   Parses the API response as JSON.
    *   Calls the `displayResults` function to show the search results.
    *   Handles errors during API fetching.
*   **Event listeners:**
    *   Click event listener for the search button, calling `executeSearch` when clicked.
    *   Keydown event listener for the search input, calling `executeSearch` when Enter is pressed.
*   **`displayResults` function:**
    *   Clears the existing content in the result container.
    *   Iterates through the received search results:
        *   Creates a `div` element for each book.
        *   Sets the content of the `div` with book details, including cover image, title, author, publication year, and ISBN.
        *   Appends the book `div` to the result container.
    *   Handles cases where no results are found.

**Overall, this library website provides a simple interface for searching for books, displaying basic information about them, and providing contact details for the library.**

**Future Enhancements:**

*   Implement search functionality using the Open Library API with more robust filtering and sorting options.
*   Add a "Book Type Selection" section with options like Fiction, Non-Fiction, etc., and display results based on the chosen type.
*   Design a more visually appealing layout, especially for the search results area, to enhance the user experience.
*   Implement user authentication and account creation for book borrowing or other features.
*   Integrate a more comprehensive book database or API for richer information and functionalities.
# LIbrary-Project
