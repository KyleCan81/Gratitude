
//Here we create our function "addToList which runs when the button is pressed"
function addToList() {

    //const input locates our input element with the ID "typingInput" then
    //.value will retrieve the text inside the input field. We assign the input text (a value) to a constant
    //named input so we can use it later
    const input = document.getElementById("typingInput").value;
    //Similarly, we use this to find the <ul> element with our gratitude list ID
    const list = document.getElementById("gratitude-list");

    //Input trim here will check if the input section is empty or only contains
    //Spaces. If it is empty. You will get an alert!
    if (input.trim() !== "") {
        //This here creates a new element (li) in your list
        const listItem = document.createElement("li");
        //Here, we set listItem.textContent to the value of input, so that the new list
        //item will display whatever we type in
        listItem.textContent = input;
        //Appendchild makes sure the text goes to the bottom of the list
        list.appendChild(listItem);

        //This clears the input field after we submit text so that it is clear
        document.getElementById("typingInput").value = "";
        //this else down here is for if the input is blank! It will send an alert instead.
    } else {
        alert("What are you grateful for?")
    }
}

