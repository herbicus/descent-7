#pragma strict

// to ask:  Make board dark and use light
//  animate sub up and down on keydown

// GLOBAL VARIABLE
var walkSpeed: int = 5;
var jumpHeight: int = 5;
// var spawn:GameObject;

function OnTriggerEnter (other : Collider) {
	Debug.Log("You have picked something up");
	Destroy(other.gameObject);
}

function Start () {

}

function Update () {

}

function OnCollisionEnter2D (other : Collision2D) {
	// Don't die on contact with ceiling or powerups
	// using the "no kill" tag
	if (other.gameObject.tag =="no kill") {
		return true;
	};
	// transform.position.x = spawn.transform.position.x;
	// transform.position.y = spawn.transform.position.y;
	transform.position.x =	-119.0245;
	transform.position.y = 	5.513453;
}

function FixedUpdate () {

	//make Character move
	rigidbody2D.velocity.x = walkSpeed;

	var start = transform.position;
	start.y -= 1.4;

	Debug.DrawRay(start, -Vector2.up, Color.red, 10);

	var ray:RaycastHit2D = Physics2D.Raycast(start, -Vector2.up, 0.01);

	var animationController:Animator = this.GetComponent("Animator");

	// Smoothly tilts a transform towards a target rotation.
		var smooth = 2.0;
		var tiltAngle = 30.0;
		var tiltAroundY = Input.GetAxis("Vertical") * tiltAngle;
		var tiltAroundX = Input.GetAxis("Horizontal") * tiltAngle;
		var target = Quaternion.Euler (0, tiltAroundX, tiltAroundY);
		// Dampen towards the target rotation
		transform.rotation = Quaternion.Slerp(transform.rotation, target,
		                               Time.deltaTime * smooth);

	// if (ray.collider) {
		
	// 	animationController.SetInteger("state", 0);
	// }else {
	// 	animationController.SetInteger("state", 1);
	// };

	if (Input.GetAxis("Vertical") > 0) {
			// rigidbody2D.velocity.y = jumpHeight;
		rigidbody2D.AddRelativeForce(Vector3.up * 20);	
	};

	// CHECK AND SEE IF USER IS HITING BUTTON/CONTROLLER
	// if (Input.GetAxis("Vertical")){
	// 	rigidbody2D.velocity.y = jumpHeight;
	// }

	// if (transform.position.y <-3) {
	// 	Debug.Log("Die Mario!");
	// 	transform.position.x = spawn.transform.position.x;
	// 	transform.position.y = spawn.transform.position.y;
	// };

	
}