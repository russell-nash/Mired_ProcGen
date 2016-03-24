#pragma strict
var size : int = 10; 
var cube : GameObject;
var scale : float = 6.5;
var move : boolean = false;
var m : float = 5;
var character : GameObject;

function Start () {
	for(var x = 0; x < size; x++){
		for(var z = 0; z < size; z++){
			var c = Instantiate(cube, Vector3(x,0,z), Quaternion.identity);
			c.transform.parent = transform;
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

function Update () {

}