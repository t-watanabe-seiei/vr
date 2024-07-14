// Controller
AFRAME.registerComponent("vr-controller", {
  dependencies: ["raycaster"],// Important
  init: function() {
    console.log("vr-controller");
    const text = document.getElementById("my_text");
    text.setAttribute("value", "Controller is ready!?");

    // this.el.addEventListener("gripdown", function(e) {
    //   text.setAttribute("value", "GripDown!!");
    // });
    // this.el.addEventListener("gripup", function(e) {
    //   text.setAttribute("value", "GripUp!!");
    // });

    // this.el.addEventListener("triggerdown", function(e) {
    //   text.setAttribute("value", "TriggerDown!!");
    // });
    // this.el.addEventListener("triggerup", function(e) {
    //   text.setAttribute("value", "TriggerUp!!");
    // });

    this.el.addEventListener("raycaster-intersection", function(e) {
      text.setAttribute("value", "Intersection:captured");
    });

    this.el.addEventListener("raycaster-intersection-cleared", function(e) {
      text.setAttribute("value", "Intersection:cleared");
    });

    this.el.addEventListener("raycaster-intersected", function(e) {
      text.setAttribute("value", "raycaster-intersected");
    });

    this.el.addEventListener("raycaster-intersected-cleared", function(e) {
      text.setAttribute("value", "raycaster-intersected-cleared");
    });
    
    this.el.addEventListener("raycaster-closest-entity-changed", function(e) {
      text.setAttribute("value", "raycaster-closest-entity-changed");
    });

    }
});