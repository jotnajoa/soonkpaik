$.get('./library/table3.svg',function(data){
    $('body').append(data.documentElement)
    var drag3 = d3.drag().on('drag',moving)

    function moving(){
        let xloc = d3.event.x
        let yloc = d3.event.y
        d3.selectAll('.dragable3')
          .attr('transform','translate('+(xloc)+','+(yloc)+')')
    }
        d3.selectAll('#Table3').selectAll('g').classed('dragable3',true).attr('width',40).attr('height',40)
          .call(drag3)
        d3.selectAll('#Table3')
        .attr('width',300)
        .attr('height',600)
        .attr('background-color','none')
        .attr('transform','translate(-35,-2470)')
        .style('display','none')
        .style('position','absolute')

        
    })