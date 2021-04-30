function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(150, 450);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot()
{
    save(document.getElementById("name").value+'.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}