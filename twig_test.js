steal('funcunit/qunit','jquery/view/twig').then(function(){
// use the view/qunit.html test to run this test script
module("jquery/view/twig")

test("ifs work", function(){
	$("#qunit-test-area").html("");

	$("#qunit-test-area").html("//jquery/view/twig/test.html.twig",{});
	ok($("#qunit-test-area").find('h1').length, "There's an h1")
})
});
