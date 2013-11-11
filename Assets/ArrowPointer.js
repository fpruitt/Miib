#pragma strict
static var usingController = false;
static var position : Vector3;
var rh : double = 0;
var rv : double = 0;

function Start () {

}

function Update ()
{
	rh = Input.GetAxis("R_Horizontal");
    rv = Input.GetAxis("R_Vertical");
    if (rh > .1 || rv > .1)
    {
    	usingController = true;
    }
    //Debug.Log("Right Horizontal: "+rh+" Left Horizontal: "+rv);
    //If no pad, use mouse position
    if(!usingController)
    {
        position = Input.mousePosition + Vector3(-Screen.width/2, -Screen.height/2, 0);
    	transform.LookAt(position);
    }
    else
    {
		transform.LookAt(transform.position + Vector3(rh, rv, 0.0));
		position = (transform.position+Vector3(rh,rv,0.0));
	}
   
}