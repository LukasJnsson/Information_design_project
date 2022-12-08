
function displayVisualisation1() {
    const container = document.getElementById("visualisation"), 
    url = "https://public.tableau.com/views/Piechart_16705004681570/Sheet1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
    settings = {
        hideTabs: true,
        onFirstInteractive: function () {
        }
    };
    var display = new tableau.Viz(container, url, settings); 
}

function displayVisualisation2() {
    const container = document.getElementById("visualisation"), 
    url = "https://public.tableau.com/views/Piechart_16705004681570/Sheet1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
    settings = {
        hideTabs: true,
        onFirstInteractive: function () {
        }
    };
    var display = new tableau.Viz(container, url, settings); 