
function displayVisualisation1() {
    const container = document.getElementById("visualisation"), 
    url = "https://public.tableau.com/views/Test_16702456908900/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link",
    settings = {
        hideTabs: true,
        onFirstInteractive: function () {
        }
    };
    var display = new tableau.Viz(container, url, settings); 
}

