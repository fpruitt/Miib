#pragma strict
var Player : GameObject;
var isAttached : boolean;
static var power : double = 200;
var isCharging : boolean;
var velocity : Vector3;
var velocity_joystick : Vector3;
var usingController = false;
var rh : float =-1000;
var rv : float =-1000;

function Start () {

}

function Update () {

	//transform.position += (Input.mousePosition);
	var charge_joystick = Input.GetAxis("Fire3_Joystick");
	var charge_keyboard = Input.GetAxis("Fire3");
	if(charge_joystick < -.1 || charge_keyboard > .1)//If joystick is charging or keyboard
	{
		if(isAttached)
		{
			power += 10;
			if(!isCharging)
			{
				isCharging = true;
			}
			//Debug.Log("Current Power: "+power);
		}
		else
		{
			transform.parent = Player.transform;
			rigidbody.velocity = Vector3.zero;
			transform.position = Player.transform.position + Vector3(.4, .4, 0);
			isAttached = true;
		}
		rh = GameObject.Find("Arrow").GetComponent(ArrowPointer).rh;
    	rv = GameObject.Find("Arrow").GetComponent(ArrowPointer).rv;
    	
    	
	}
	else
	{
		if(isCharging) //If the current state is charging, but we have released...
		{
			transform.parent = null;
			
			velocity = (Vector3(Input.mousePosition.x - Screen.width/2, Input.mousePosition.y - Screen.height/2, 0)).normalized*power;
			Debug.Log(velocity);
			
			velocity_joystick = Vector3(rh, rv, 0.0).normalized*power;
			Debug.Log(velocity_joystick);
			if(ArrowPointer.usingController == true)
			{
				rigidbody.AddForce(velocity_joystick);
			}
			else
			{
				rigidbody.AddForce(velocity);
			}
			isAttached = false;
			
			isCharging = false;
			power = 200;
		}
	}

	if(isAttached)
	{
		transform.position = Player.transform.position + ArrowPointer.position.normalized;
	}
	
	if((Player.transform.position - transform.position).magnitude > 1.2)
	{
		gameObject.layer = 9;
	}
	else
	{
		gameObject.layer = 10;
	}
}
function OnCollisionEnter()
{
	rigidbody.constraints = RigidbodyConstraints.FreezeAll;
}
function OnCollisionExit()
{
	//rigidbody.constraints = RigidbodyConstraints.None;
	rigidbody.constraints = RigidbodyConstraints.FreezeRotation;
}