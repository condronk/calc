FrisbeeWPjs = function(Total, ScoreA, ScoreB, Poss) {

	var T = Total;
	var ii = ScoreA;
	var jj = ScoreB;
	var p = Poss;

	var H = Math.ceil(T/2);

	// TEST FOR INPUT FAILURE

	var B = 0.3143;
	var Halfp = 2;
	var i_Win = 0;
	var j_Win = 0;
	var Trials = 10000000;
	var G = 1;

	while (G < Trials) {
		var p = Poss;
		var i = ii;
		var j = jj;

		// First Half
		while (i<H && j<H) {
			if (p==1) {
				var x = Math.random()
				if (x>B) {
					i = i+1;
					p = 2;
				} else{
					j = j+1;
					p = 1; 
				}

			}

			if (i==H) {
				p=Halfp;
				break //HOW TO EXIT WHILE IN JS
			}

			if(j==H) {
				p=Halfp;
				break // ""
			}

			if (p==2) {
				var x = Math.random()
				if (x>B) {
					j = j+1;
					p=1;
				} else{
					i = i+1;
					p=2;
				}	
			}

			if (i==H) {
				p=Halfp;
				break //HOW TO EXIT WHILE IN JS
			}

			if (j==H) {
				p=Halfp;
				break // ""
			}
		}

		//Second Half
		while (i<T && j<T) {
			if (p==1) {
				var x = Math.random()
				if (x>B) {
					i = i+1;
					p = 2;
				} else{
					j = j+1;
					p = 1; 
				}

			}

			if (i==T) {
				i_Win = i_Win+1;
				break //HOW TO EXIT WHILE IN JS
			}

			if (j==T) {
				j_Win = j_Win+1;
				break // ""
			}

			if (p==2) {
				var x = Math.random()
				if (x>B) {
					j = j+1;
					p=1;
				} else{
					i = i+1;
					p=2;
				}
			}

			if (i==T) {
				i_Win = i_Win+1;
				break //HOW TO EXIT WHILE IN JS
			}

			if (j==T) {
				j_Win = j_Win+1;
				break // ""
			}
		}




		G++
	}

	var WP1 = i_Win/Trials;
	var WP2 = j_Win/Trials;

return WP1

}

console.log(FrisbeeWPjs(Total,ScoreA,ScoreB,Poss));