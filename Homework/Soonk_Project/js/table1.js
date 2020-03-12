$.get('./library/table1.svg',function(data){
    $('body').append(data.documentElement)
    var drag1 = d3.drag().on('drag',moving)

    function moving(){
        let xloc = d3.event.x
        let yloc = d3.event.y
        d3.selectAll('.dragable1')
          .attr('transform','translate('+(xloc)+','+(yloc)+')')
    }
        d3.selectAll('#Table1').selectAll('g').classed('dragable1',true).attr('width',40).attr('height',40)
          .call(drag1)
        d3.selectAll('#Table1')
        .attr('width',300)
        .attr('height',400)
        .attr('background-color','none')
        .attr('transform','translate(0,-2900)')
        .style('display','none')
        .style('position','absolute')
        // Later, display -> inline-block
    })