(function($) {

    // import product field

    var dataDemo = {
        s : {
            red: 20,
            blue: 30,
            black:50
        },
        m : {
            red: 535,
            blue: 65,
            black: 14
        },
        l : {
            red: 98,
            blue: 52,
            black: 78 
        },
        xl : {
            red: 83,
            blue: 45,
            black: 87 
        }
    }

    function drawColor(ctx, color) {

    }

    function importCanvas(size, color, number) {
        const canvas = document.getElementById('ut-bar-import');
        let height = canvas.height;
        let width = canvas.width;
        let ctx = canvas.getContext('2d');
        
        ctx.strokeStyle = "rgba(31, 45, 65, 0.125)";

        // -->
        for(let i = 0; i < size.length; i++) {
            ctx.beginPath();
            ctx.moveTo(i*57.5 + 70.5, 0.5);
            ctx.lineTo(i*57.5 + 70.5, color.length*30 + 0.5);
            ctx.stroke();
            ctx.closePath();
            
            // set label size
            ctx.fillStyle = 'black'
            ctx.font = '15px sans-serif';
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            ctx.fillText(size[i], i*57.5 + 67, 15);
        
        }

        // ^
        for(let i = 0; i < color.length; i++) {
            ctx.beginPath();
            ctx.moveTo(0.5, i*30 + 30.5);
            ctx.lineTo(width + 0.5, i*30 + 30.5);
            ctx.strokeStyle = "rgba(31, 45, 65, 0.125)";
            ctx.stroke();

            // set circle color
            ctx.beginPath();
            ctx.arc(10, i*30.5 + 30.5, 9, 0, 2 * Math.PI, false);
            ctx.fillStyle = color[i];
            ctx.fill();
            ctx.strokeStyle = '#ababab';
            ctx.stroke();
        }
        
        ctx.beginPath();
        ctx.moveTo(1*57.5 + 55, 10);
        ctx.lineTo(1*57.5 + 85, 10);
        ctx.lineWidth = 20;
        ctx.strokeStyle = 'red';
        ctx.lineCap = 'round';
        ctx.stroke();
        

    }

    importCanvas(['s','m','l','xl'], ['red','blue','black'], dataDemo);

    let turnOnOff = true;
    $('.ut-btn-proacti').click(function() {
        if(turnOnOff) {
            $('.ut-pro-activity').addClass('active');
            $('.ut-conclude').removeClass('active');
            turnOnOff = false;
        } else {
            $('.ut-conclude').addClass('active');
            $('.ut-pro-activity').removeClass('active');
            turnOnOff = true;
        }
        
    });

})(jQuery)
