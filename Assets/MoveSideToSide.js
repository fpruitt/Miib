#pragma strict
var startPosition : double;
var toggle : boolean;

function Start () {
	startPosition = transform.position.x;
	toggle = true;
}

function Update () {
	if(toggle)
	{
		if(transform.position.x < startPosition + 2.5)
		{
			transform.position.x += Time.deltaTime;
		}
		else
		{
			toggle = false;
		}
	}
	else
	{
		if(transform.position.x > startPosition - 2.5)
		{
			transform.position.x -= Time.deltaTime;
		}
		else
		{
			toggle = true;
		}
	}
	
}