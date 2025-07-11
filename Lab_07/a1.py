questions = [
    "Create a basic HTML structure with head, title, and body tags.",
    "Add a paragraph and apply bold, italic, and underline formatting.",
    "Use <font> tag to set different font faces and colors for a sentence.",
    "Add six heading levels and explain when to use each.",
    "Use <hr> and <br> tags in a poem-style content.",
    "Insert a comment in your HTML code explaining each section.",
    "Create an HTML page using <strong> and <em> instead of <b> and <i>.",
    "Demonstrate usage of <pre> tag with formatted text.",
    "Add metadata in <head> section using <meta> and <title>.",
    "Use <abbr>, <address>, and <mark> tags in context.",
    "Create nested ordered and unordered lists for a recipe.",
    "Use <dl>, <dt>, and <dd> for a glossary.",
    "Add an image with title and different formats (.png, .jpg).",
    "Add <video> with multiple sources and fallback text.",
    "Use <audio> with autoplay and loop enabled.",
    "Add an animated GIF using <img> and describe use case.",
    "Use <embed> to embed a PDF file.",
    "Add a responsive image using width='100%' and style attributes.",
    "Add multiple images in a grid layout using only HTML.",
    "Demonstrate use of <figure> and <figcaption> with an image.",
    "Create a 5x5 table with header and footer.",
    "Use colspan and rowspan in an HTML table.",
    "Create a timetable for school using <table>.",
    "Add an internal link to jump to bottom of the page.",
    "Use target='_blank' and rel='noopener' in external links.",
    "Build a page with a fixed navigation bar using anchor tags.",
    "Use <caption> to describe a table.",
    "Add hover effect using title attribute in links.",
    "Combine <table> and <img> in one layout.",
    "Add email and telephone links with appropriate href format.",
    "Create a form with input, radio, checkbox, submit, and reset buttons.",
    "Use <label> with 'for' attribute to describe inputs.",
    "Add a dropdown menu with states of India.",
    "Use fieldset and legend to group form inputs.",
    "Create a blog layout using semantic tags like <article> and <section>.",
    "Create a footer with contact info using <footer>.",
    "Build a sidebar using <aside>.",
    "Use <iframe> to embed a Google Map.",
    "Draw a rectangle and circle using <canvas>.",
    "Use <svg> to draw a line and a circle.",
    "Apply internal CSS to style headings and paragraphs.",
    "Use external CSS to style background, margin, and border.",
    "Create a box with padding and margin difference shown.",
    "Apply class and ID selectors to multiple elements.",
    "Create a flexbox layout with header, sidebar, content, footer.",
    "Use grid layout to organize 6 images in 2 rows and 3 columns.",
    "Add hover effect using transition on buttons.",
    "Create an animation that changes text color continuously.",
    "Use media queries to change layout for mobile view.",
    "Build a dropdown menu and horizontal nav bar using only CSS."
]

for i, question in enumerate(questions, start=1):
    filename = f"QUE_{i:02}.html"
    with open(filename, "w", encoding="utf-8") as file:
        file.write(f"""<!DOCTYPE html>
<html>
<head>
    <title>Question {i:02}</title>
</head>
<body>
    <h1>Question {i:02}</h1>
    <p>{question}</p>
</body>
</html>
""")
    print(f"Created {filename}")
