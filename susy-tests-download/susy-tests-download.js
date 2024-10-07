// Find all <B> elements
const blockquotes = document.querySelectorAll('blockquote');
// Get all <a> elements within the "Open tests" block that contain ".in" or ".out"
// const links = openTestsBlock.querySelectorAll('a[href*=".in"], a[href*=".out"]');
const links = blockquotes[1].querySelectorAll('a');

// Loop through each filtered link and trigger download
function downloadLink(link, index) {
    setTimeout(() => {
        const url = link.href;
        
        // Create a temporary anchor element
        const a = document.createElement('a');
        a.href = url;
        a.download = '';  // This sets the link to trigger download
        
        // Append to the body, trigger the click event, and remove the element
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }, index*250);
}

links.forEach(downloadLink);

console.log(`Starting downloads for ${links.length} files.`);