using UnityEngine;
using System.Collections;
using UnityEngine.Networking;

public class PlayerNetworkSetup : NetworkBehaviour {

	[SerializeField] Camera PlayerCamera;
	[SerializeField] AudioListener audioListener;
//	[SerializeField] Component userControl;
//	[SerializeField] Component thirdPersonScript;

	// Use this for initialization
	void Start () {
		

		if(isLocalPlayer){
			
			PlayerCamera.enabled = true;
			audioListener.enabled = true;
//			userControl.enabled = true;
//			thirdPersonScript.enabled = true;
			GetComponent<UnityStandardAssets.Characters.ThirdPerson.ThirdPersonCharacter>().enabled = true;
			GetComponent<UnityStandardAssets.Characters.ThirdPerson.ThirdPersonUserControl>().enabled = true;
		}
	}
	
}
