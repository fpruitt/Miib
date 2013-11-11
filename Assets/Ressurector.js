#pragma strict

function Start () {

}

function Update ()
{
	if(transform.position.y < -10)
	{
		transform.position = Vector3(0, 1.5, 0);
	}

}