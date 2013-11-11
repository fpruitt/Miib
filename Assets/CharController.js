#pragma strict
var timeSinceJump : double = 0;
var MIN_TIME_TO_JUMP : double = .1;
var JUMP_FACTOR : double = 300;

var WALK_FACTOR : double = .2;
var SLOW_WALK_FACTOR : double = WALK_FACTOR/2;
var RUN_FACTOR : double = WALK_FACTOR * 2;

var epsilon : double = .0000001;

function Start ()
{

}

function Update ()
{
	/*
	if(Input.GetKey("d") )
	{	
		transform.position.x += WALK_FACTOR;
	}
	if(Input.GetKey("a"))
	{	
		transform.position.x -= WALK_FACTOR;
	}
	*/
	/*if(Input.GetKey("w") && timeSinceJump > MIN_TIME_TO_JUM)
	{	
		if(isGrounded())
		{
			rigidbody.AddForce(Vector3.up*JUMP_FACTOR);
			timeSinceJump = 0;
		}
	}
	*/
	var horiz_distance = Input.GetAxis("Horizontal");
	var jumpPressed = Input.GetAxis("Fire1");
	var runPressed = Input.GetAxis("Fire2");
	var amountToMove : double = 0;
	
	if(jumpPressed && timeSinceJump > MIN_TIME_TO_JUMP)
	{	
		if(isGrounded())
		{
			Debug.Log(timeSinceJump);
			rigidbody.AddForce(Vector3.up*JUMP_FACTOR);
			timeSinceJump = 0;
		}
	}
	
	if(horiz_distance > (0+epsilon)
	   //&& !Physics.Raycast (transform.position, Vector3.right, .5, 10)
	   //&& !Physics.Raycast (transform.position + Vector3(0, .75, 0), Vector3.right, .5, 11)
	   //&& !Physics.Raycast (transform.position + Vector3(0, .99, 0), Vector3.right, .5, 11)
	   //&& !Physics.Raycast (transform.position + Vector3(0, -.75, 0), Vector3.right, .5, 11)
	   //&& !Physics.Raycast (transform.position + Vector3(0, -.99, 0), Vector3.right, .5, 11)
	   )
	{
		if(horiz_distance > .5)
		{
			//Debug.Log(WALK_FACTOR);
			amountToMove = WALK_FACTOR;
			Debug.Log(amountToMove);
		}
		else
		{
			amountToMove = SLOW_WALK_FACTOR;
		}
		if(runPressed==1)
		{
			amountToMove = RUN_FACTOR;
		}
		
		transform.position.x += amountToMove;
		amountToMove = 0;
	}
	else if(horiz_distance < (0-epsilon))
	{
		if(horiz_distance < -.5)
		{
			amountToMove = WALK_FACTOR;
		}
		else
		{
			amountToMove = SLOW_WALK_FACTOR;
		}
		
		if(runPressed==1)
		{
			amountToMove = RUN_FACTOR;
		}
		transform.position.x += -amountToMove;
		amountToMove = 0;
	}
	
	timeSinceJump += Time.deltaTime;

}

function isGrounded()
{
	//check if player's center has ground below it
	if (Physics.Raycast (transform.position, Vector3.up*-1, 1))
	{
		return true;
	}
	//check if player's left has ground below it
	else if(Physics.Raycast (transform.position + Vector3(-.5, 0, 0), Vector3.up*-1, 1))
	{
		return true;
	}
	//check if player's right has ground below it
	else if(Physics.Raycast (transform.position + Vector3(.5, 0, 0), Vector3.up*-1, 1))
	{
		return true;
	}
	return false;
}