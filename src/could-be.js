// Define and assign a Markdown-it renderer.
let md;
md = window.markdownit({html: true}).use(window.markdownitFootnote);
// Load the Markdown file with jQuery.
$.ajax({
  url: "https://github.com/salunkhebhushan/testdemo/README.md",
  success: function(markdown){
    // Convert the Markdown to HTML.
    let html;
    html = md.render(markdown);
    // Print the HTML to #content using jQuery.
    $("#pageData").html(html);
  }
});
