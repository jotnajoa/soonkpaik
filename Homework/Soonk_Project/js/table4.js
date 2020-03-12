$.get('./library/table4.svg',function(data){
    $('body').append(data.documentElement)
    var drag4 = d3.drag().on('drag',moving)

    function moving(){
        let xloc = d3.event.x
        let yloc = d3.event.y
        d3.selectAll('.dragable4')
          .attr('transform','translate('+(xloc)+','+(yloc)+')')
    }
        d3.selectAll('polygon').classed('dragable4',true).call(drag4).attr('width',40).attr('height',40)
          d3.selectAll('polyline').classed('dragable4',true).call(drag4).attr('width',40).attr('height',40)

        d3.selectAll('svg')
        .attr('width',300)
        .attr('height',400)
        .attr('background-color','none')
        .attr('transform','translate(0,150)')
        .style('display','none')
        .style('position','absolute')
        .style('top',500)
    })