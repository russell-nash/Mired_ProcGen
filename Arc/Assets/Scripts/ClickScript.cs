using UnityEngine;
using System.Collections;

public class ClickScript : MonoBehaviour {
	public AudioClip click;
	private float countdown;
	private AudioSource clickSource;

	// Use this for initialization
	void Start () {
		resetTimer();
		clickSource = GetComponent<AudioSource>();
	}
	
	// Update is called once per frame
	void Update () {
		countdown -= Time.deltaTime;
		if(countdown <= 0){

			resetTimer();
		}
	}
	
	void resetTimer(){
		countdown = Random.value * 2.0f + 1.0f;
	}
}
