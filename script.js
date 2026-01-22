function connect() {
                document.getElementById("listen").innerHTML 
                = "Listen to music and podcasts. " + emote.ursa(); 
                // attempting to incorporate js library
            }

function follow() {
                document.getElementById("listen").innerHTML 
                = "Follow us at @pianoroom for more content!";
            }

function toggleBold() {
                const el = document.getElementById("toggleText");
                el.classList.toggle("bold");
}

function toggleItalic() {
                const el = document.getElementById("toggleText");
                el.classList.toggle("italic");
}

function changeColor() {
                const el = document.getElementById("toggleText");
                const selectedColor = document.getElementById("colorWheel").value;
                el.style.color = selectedColor; // TODO: debug, link this function to color of text
}

function changeAssistantText() {
                const el = document.getElementById("selectedThings");
                const el2 = document.getElementById("toggleText").classList;
                const selectedColor = document.getElementById("colorWheel").value;
                const selectedAssistant = document.querySelector("select").value;
                el.style.color = selectedColor;
                el.classList = el2;
                el.innerText = selectedAssistant;
}

let clickerCount = 0;
function clickerIncrease() {
    // const el = document.getElementById("clickerCounter").innerHTML;
    // let clickerCount = clickerCount + 1;
    // el = "You've clicked this button " + clickerCount + " times!";
    // let clickerCount = clickerCount + 1;
    document.getElementById("clickerCounter").innerHTML = "You've clicked this button " + clickerCount + " times!";
}

