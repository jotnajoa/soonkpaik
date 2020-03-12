
 // dx&dy is the increment for translate.
d3.json('./js/rect.json').then(function(data){
   
   
    let rx=data[0].x
    let ry=data[0].y
    let rwidth=data[0].width;
    let rheight=data[0].height;
    let rceilingHeight=data[0].ceilingHeight;

    let BedRoomCoord=[]
    newcoord=data[1].coordata;
    // console.log(newcoord)
   

var svg=d3.selectAll('body').append('svg').attr('width',2700).attr('height',2700).attr('background-color','none').classed('livingroom',true).attr('transform','translate(350,-300)')
d3.selectAll('svg').append('text').attr('fill','gray').classed('dimensionoff',true).attr('id','xdim')
d3.selectAll('svg').append('text').attr('fill','gray').classed('dimensionoff',true).attr('id','ydim')

var drag = d3.drag().on('drag',moving).on('end',moved)
// var drag2 = d3.drag().on('drag',moving2)

// function moving2(data){
    
//     let newx =d3.event.x+100;
//     let newy =d3.event.y+100;

//     if(newx>120&&newy<100){
//         pathdata[1].x= d3.event.x+100
//         pathdata[2].x= d3.event.x+100
//         console.log(pathdata[1].x);
//         console.log(pathdata[2].x);

//         d3.select(this)
//           .attr('d',line(pathdata))
//         }
        
//         else if((newx>30&&newx<=120)&&(newy>100&newy<=200)){
//         pathdata[3].x=function(d){return d3.event.x+100}
//         pathdata[4].x=function(d){return d3.event.x+100}
//         d3.select(this)
//         .attr('d',line(pathdata))
//     }
// }
function moving(){
    d3.select(this)
    .attr('height',d3.event.y-400)
    .attr('width',d3.event.x-100)
    .style('stroke','red')
    d3.select('.dimensionoff').classed('dimensionoff',false).classed('dimension',true)
    let xdim=Math.round(d3.event.x-150)
    let ydim=Math.round(d3.event.y-150)
    console.log(xdim)
    console.log(ydim)

 
    d3.selectAll('svg').select('#xdim').text(xdim).attr('x',function(d,i){return (d3.event.x-100)*3/4}).attr('y',function(d,i){return (d3.event.y)})
    d3.selectAll('svg').select('#ydim').text(ydim).attr('x',function(d,i){return (d3.event.x+1)}).attr('y',function(d,i){return (d3.event.y)*5/6})
    
}

function moved(){
    d3.select(this)
    .style('stroke','black')
    d3.selectAll('#xdim').classed('dimension',false).classed('dimensionoff',true)
    d3.selectAll('#ydim').classed('dimension',false).classed('dimensionoff',true)
}

var rect=svg.append('rect')


var line=d3.line()
        .x(function(d){return d.x})
        .y(function(d){return d.y})


        
        // pathdata=newcoord
        // d3.select('svg').append('path').attr('d',line(pathdata))
        //         .attr('transform','translate(100,300)')
        //         .attr('stroke-width',2)
        //         .attr('stroke','red')
        //         .classed('newroom',true)
        //         .call(drag2)
rect.attr('x',rx)
.attr('y',ry)
.attr('width',rwidth)
.attr('height',rheight)
.attr('fill','rgba(255, 255, 255, 0.027)')
.style('stroke','black')
.style('stroke-width',2)
.call(drag)
.attr('transform','translate(100,400)')
.style('display','inline-block')

})

