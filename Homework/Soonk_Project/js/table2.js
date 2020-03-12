$.get('./library/table2.svg',function(data){
    $('body').append(data.documentElement)
    var drag2 = d3.drag().on('drag',moving)

    function moving(){
        let xloc = d3.event.x
        let yloc = d3.event.y
        d3.selectAll('.dragable2')
          .attr('transform','translate('+(xloc)+','+(yloc)+')')
    }
        d3.selectAll('#Table2').selectAll('g').classed('dragable2',true).attr('width',40).attr('height',40)
          .call(drag2)
        d3.selectAll('#Table2')
        .attr('width',300)
        .attr('height',400)
        .attr('background-color','none')
        .attr('transform','translate(-55,-2710)')
        .style('display','none')
        .style('position','absolute')
        
    })