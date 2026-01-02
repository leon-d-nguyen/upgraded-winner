function connect() {
                document.getElementById("listen").innerHTML 
                = "Listen to music and podcasts.";
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
                const col = document.getElementById("colorWheel").value;
                el.color = col; // TODO: debug, link this function to color of text
}