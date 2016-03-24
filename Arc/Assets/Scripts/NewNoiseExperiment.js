// Create a texture and fill it with Perlin noise.
// Try varying the xOrg, yOrg and scale values in the inspector
// while in Play mode to see the effect they have on the noise.

// Width and height of the texture in pixels.
var pixWidth: int;
var pixHeight: int;

// The origin of the sampled area in the plane.
var xOrg: float;
var yOrg: float;
var xPos: float;
var yPos: float;

// The number of cycles of the basic noise pattern that are repeated
// over the width and height of the texture.
var scale = 1.0;


private var noiseTex: Texture2D;
private var pix: Color[];
private var rend: Renderer;


function Start () {
	rend = GetComponent.<Renderer>();
	
	// Set up the texture and a Color array to hold pixels during processing.
	noiseTex = new Texture2D(pixWidth, pixHeight);
	pix = new Color[noiseTex.width * noiseTex.height];
	rend.material.mainTexture = noiseTex;
}


function CalcNoise() {


	// For each pixel in the texture...
	for (var y = 0.0; y < noiseTex.height; y++) {
		for (var x = 0.0; x < noiseTex.width; x++) {
//			xOrg = Transform.x;	

			// Get a sample from the corresponding position in the noise plane
			// and create a greyscale pixel from it.
			var xCoord = xOrg + x / noiseTex.width * scale;
			var yCoord = yOrg + y / noiseTex.height * scale;
			var sample = Mathf.PerlinNoise(xCoord, yCoord);
			pix[y * noiseTex.width + x] = new Color(sample, sample, sample);
		}
	}
	
	// Copy the pixel data to the texture and load it into the GPU.
	noiseTex.SetPixels(pix);
	noiseTex.Apply();
}


function Update () {
	
	CalcNoise();
}

