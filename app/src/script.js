
function displayVisualisation() {
    const container = document.getElementById("visualisation"), 
    url = "https://public.tableau.com/views/Regional_16698944838150/Obesity?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link",
    settings = {
        hideTabs: true,
        onFirstInteractive: function () {
        }
    };
    var display = new tableau.Viz(container, url, settings); 
}