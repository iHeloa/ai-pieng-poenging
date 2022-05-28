rightWristX="";
rightWristY="";
rightWristScore="";


function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(ping_pong);

	video=createCapture(VIDEO);
	video.size(800,400);
	video.hide();
	video.parent("game_console");
	posenet=ml5.poseNet(video,modelLoaded);
	poseNet.on("pose",gotPoses);
}
	function modelLoaded(){
		console.log("poseNet is intialized");

	}

	function gotPoses(results){
		if(results.length>0){
			console.log(results);
			rightWristX=results[0].pose.right.wrist.x;
			rightWristY=results[0].pose.right.wrist.y;
			rightWristScore=results[0].score.right.wrist;
		}
	}


function draw() {
	image(video,0,0,1240,336);
	game()
	if(rightWristScore>0.2){
		fill("#00ff00");
		stroke("#0000ff");
		circle(rightWristX,rightWristY,6);
	}
}






