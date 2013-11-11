#pragma strict
var miible : GameObject;
var power : double;
var go :GameObject;
function Start () 
{
	
	go= Instantiate(new GameObject(), new Vector3(0.5, .1, 0), Quaternion.identity); 
	go.AddComponent(GUIText);
	go.GetComponent(GUIText).fontStyle = FontStyle.Bold;
	go.GetComponent(GUIText).fontSize = 50;
}
function Update () {
	
	
	go.guiText.text = "Power: "+GameObject.Find("Miible").GetComponent(MiibleController).power.ToString();
	
}