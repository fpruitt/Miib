#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(other : Collision)
{
	other.transform.parent = transform;
}

function OnCollisionExit(other : Collision)
{
	other.transform.parent = null;
}