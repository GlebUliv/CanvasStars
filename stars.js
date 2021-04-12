$(function() {
    
    drawStar = function(element, cx, cy, spikes, outerRadius, innerRadius, bgColor) {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        let step = Math.PI / spikes;
    
        element.beginPath();
        element.moveTo(cx, cy - outerRadius)
        for (i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            element.lineTo(x, y)
            rot += step

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            element.lineTo(x, y)
            rot += step
        }
        element.lineTo(cx, cy - outerRadius)
        element.closePath();
        element.fillStyle = bgColor;
        element.fill();
    
        this.clicked = function(){
            // console.log("bgColor" , bgColor)
            const canvasSmall = document.getElementById("canvasSmall");
            canvasSmall.style.background = bgColor
        }
    }
    
    function init( id, cx, cy, spikes, outerRadius, innerRadius, bgColor) {
        let element = document.getElementById(id);
        let ctxEl = element.getContext('2d');
        let clickAction = new drawStar(ctxEl, cx, cy, spikes, outerRadius, innerRadius, bgColor);
    
        $("#" + id + " ").click(function(){
            clickAction.clicked()
        })    
    }
    
    init("canvasBig", 40, 110, 5, 30, 15, "red");
    init("canvasBig", 250, 110, 5, 33, 15, "purple");
    init("canvasBig", 150, 80, 5, 33, 15, "blue");
    init("canvasBig", 250, 40, 5, 30, 15, "yellow");
    init("canvasBig", 40, 40, 5, 30, 15, "black");
});


