using UnityEngine;
using System.Collections;
using UnityEngine.Networking;

public class Camera_Init : NetworkBehaviour {

	// Use this for initialization
	void Start () {
		if(isLocalPlayer){
			GetComponent<UnityStandardAssets.Utility.SimpleMouseRotator>().enabled = true;
		}
	}

}
