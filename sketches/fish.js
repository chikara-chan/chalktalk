function() {
   this.label = 'fish';
   this.swim = false;
   this.swipe[0] = ['SWIM!', function() { this.swim = true; }];

   this.render = function() {
      var x = 0;
      if (this.swim) {
         if (this.swimTime === undefined)
            this.swimTime = time;
         x = time - this.swimTime;
      }
      var c = cos(2 * TAU * x) * .1;
      m.translate(2*x,0,0);
      m.translate(1,0,0);
      m.rotateZ(-c/2);
      m.translate(-1,0,0);
      mSpline([[-1,.3+c],[-.45,-c/2],[ .5 ,-.4 ],[ 1,-.15],
               [ 1,.15 ],[ .5 ,.4  ],[-.45,-c/2],[-1,c-.3]]);
      mSpline([[-1,.3+c],[-.95,c],[-1,-.3+c]]);
      this.afterSketch(function() {
         mSpline([[1,-.15],[.8,-.15],[.6,-.1]]);
         mDrawOval([.45,.1],[.65,.3]);
	 if (! this.isOnScreen())
	    this.fade();
      });
   }
}
