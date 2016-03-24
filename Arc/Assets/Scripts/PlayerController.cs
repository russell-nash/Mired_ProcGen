using UnityEngine;
using System.Collections;

public class PlayerController : MonoBehaviour {

	public float Speed = 1;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		float moveHorizontal = Input.GetAxis("Horizontal");
		float moveVertical = Input.GetAxis("Vertical");

		Vector3 movement = new Vector3((moveHorizontal * Speed), 0, (moveVertical * Speed));

		transform.Translate(movement);
	}
}
