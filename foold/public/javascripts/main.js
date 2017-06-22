// All the stuff that doesn't require a backend
// const slider = new Slider ('.ex10', {});
  //
  $(document).ready(function() {
    var slider = new Slider('#ex10', {
      step: 1,
	    min: 0,
	    max: 5
    });
    var slider2 = new Slider('#ex11', {
      step: 1,
	    min: 0,
	    max: 5
    });
    var slider3 = new Slider('#ex12', {
      step: 1,
	    min: 0,
	    max: 5
    });
    console.log('stars ok');
  });
