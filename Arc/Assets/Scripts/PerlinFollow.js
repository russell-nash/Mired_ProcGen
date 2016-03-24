#pragma strict
var size : int = 10; 
var cube : GameObject;
var scale : float = 6.5;
var move : boolean = false;
var m : float = 5;
var characterpos : Transform;
var lastPosition : Vector3;

var CubeCount : int = 0;
var MadeLand : boolean = false;
var terrainGrid = [[1,2,3],[4,5,6],[7,8,9]];


function Start () {
	Populate();
	characterpos.position.x = 1;
	characterpos.position.z = 1;
	lastPosition = characterpos.position;
}

function FixedUpdate () {
/*
	for(var child : Transform in transform) {
		var height = Mathf.PerlinNoise(child.transform.position.x/scale, child.transform.position.z/scale);
		child.GetComponent.<Renderer>().material.color = Color(height,height,height,height);
	}
	if(move == true){
		for(var child : Transform in transform) {
			height = Mathf.PerlinNoise(child.transform.position.x/scale, child.transform.position.z/scale);
			child.transform.position.y = Mathf.RoundToInt(height * m);
		}
	}*/
	if(lastPosition != characterpos.position){
		MadeLand = false;
		CheckLand();
		lastPosition = characterpos.position;
	}
	

//	scale = characterpos.position.x;
}

function Populate(){
	for(var x = Mathf.RoundToInt(characterpos.position.x - size); x < Mathf.RoundToInt(characterpos.position.x + size); x++){
		for(var z = Mathf.RoundToInt(characterpos.position.z - size); z < Mathf.RoundToInt(characterpos.position.x + size); z++){
			var c = Instantiate(cube, Vector3(x,0,z), Quaternion.identity);
			c.transform.parent = transform;
			CubeCount++;
		}
	}
	for(var child : Transform in transform){
		var height = Mathf.PerlinNoise(child.transform.position.x/scale, child.transform.position.z/scale);
	}
	for(var child : Transform in transform) {
		height = Mathf.PerlinNoise(child.transform.position.x/scale, child.transform.position.z/scale);
		child.GetComponent.<Renderer>().material.color = Color(height,height,height,height);
	}
	if(move == true){
		for(var child : Transform in transform) {
			height = Mathf.PerlinNoise(child.transform.position.x/scale, child.transform.position.z/scale);
			child.transform.position.y = Mathf.RoundToInt(height * m);
		}
	}

}

function CheckLand(){
	var posx = characterpos.position.x;
	var posz = characterpos.position.z;	

	if(MadeLand == false){
		if(Mathf.RoundToInt(Mathf.Abs(posx)) % (size / 2) == 0){
			Populate();
			MadeLand = true;
		}
		if(Mathf.RoundToInt(Mathf.Abs(posz)) % (size / 2) == 0){
			Populate();
			MadeLand = true;
		}
	}
}