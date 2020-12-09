/** define our data */
var instruments = [{ name: 'concertina', number: 2 },
               { name: 'piano', number: 5 },
               { name: 'harp', number: 25 }];

/** make the viz
 - @param scale x multiplier
*/
function doit (scale) {
    d3.select('body')
        .selectAll('rect')
        .data(instruments)
        .attr('width', function (d) { console.log('name ' + d.name); return d.number * scale; });
}

doit(10);
