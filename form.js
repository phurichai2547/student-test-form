// form.js

// Initialize Form Application
function init() {
    // Create "Show Form" button
    const showFormButton = document.createElement('button');
    showFormButton.textContent = 'Show Form';
    showFormButton.addEventListener('click', showForm);
    
    // Add "Show Form" button to the document body
    document.body.appendChild(showFormButton);
}

// Display Form Elements
function showForm() {
    // Remove "Show Form" button
    this.remove(); // 'this' refers to the button that triggered the event
    
    // Create text input field for short text inputs
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.placeholder = 'Enter text';
    
    // Create textarea for longer text inputs
    const textArea = document.createElement('textarea');
    textArea.placeholder = 'Enter more text';
    
    // Create div for text input field and add the input field inside it
    const divInput = document.createElement('div');
    divInput.appendChild(textInput);
    
    // Create div for textarea and add the textarea inside it
    const divTextArea = document.createElement('div');
    divTextArea.appendChild(textArea);
    
    // Create "Display" button
    const displayButton = document.createElement('button');
    displayButton.textContent = 'Display';
    displayButton.addEventListener('click', display);
    
    // Create "Clear" button
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear';
    clearButton.addEventListener('click', clear);
    
    // Create div for display area
    const displayArea = document.createElement('div');
    displayArea.id = 'displayArea';
    
    // Add elements to the document body
    document.body.appendChild(divInput);
    document.body.appendChild(divTextArea);
    document.body.appendChild(displayButton);
    document.body.appendChild(clearButton);
    document.body.appendChild(displayArea);
}

// Show Entered Text
function display() {
    // Retrieve text from input field and textarea
    const textInputValue = document.querySelector('input[type="text"]').value;
    const textAreaValue = document.querySelector('textarea').value;
    const displayArea = document.getElementById('displayArea');
    
    // Validate text input and textarea
    if (textInputValue.trim() !== '' && textAreaValue.trim() !== '') {
        // Clear display area
        displayArea.innerHTML = '';
        // Display entered text with formatting
        displayArea.innerHTML = `<h1>${textInputValue}</h1><p>${textAreaValue}</p>`;
    } else {
        // Clear display area
        displayArea.innerHTML = '';
        // Display error message
        displayArea.innerHTML = '<p style="color: red;">Error: Both input and textarea must contain text.</p>';
    }
}

// Clear Displayed Text
function clear() {
    const displayArea = document.getElementById('displayArea');
    displayArea.innerHTML = ''; // Clear the content within the display area
}

// Initialize the Form Application
init();
