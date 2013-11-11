#pragma strict
var startPosition : double;
var toggle : boolean;

function Start () {
	startPosition = transform.position.y;
	toggle = true;
}

function Update () {
	if(toggle)
	{
		if(transform.position.y < startPosition + 2.5)
		{
			transform.position.y += Time.deltaTime;
		}
		else
		{
			toggle = false;
		}
	}
	else
	{
		if(transform.position.y > startPosition - 2.5)
		{
			transform.position.y -= Time.deltaTime;
		}
		else
		{
			toggle = true;
		}
	}
	
}