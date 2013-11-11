#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(other : Collision)
{
	other.transform.position = Vector3(0, 1.5, 0);
}