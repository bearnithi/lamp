import { Component, OnInit } from '@angular/core';
declare var d3: any;
declare var $: any;

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.scss']
})
export class SalesChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // Monthly sales area chart
    var _MonthlySalesAreaChart = function (element, height, color) {
      if (typeof d3 == 'undefined') {
        console.warn('Warning - d3.min.js is not loaded.');
        return;
      }

      // Initialize chart only if element exsists in the DOM
      if ($(element).length > 0) {


        // Basic setup
        // ------------------------------

        // Define main variables
        var d3Container = d3.select(element),
          margin = { top: 20, right: 35, bottom: 40, left: 35 },
          width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
          height: any = height - margin.top - margin.bottom;

        // Date and time format
        var parseDate = d3.time.format('%Y-%m-%d').parse,
          bisectDate = d3.bisector(function (d) { return d.date; }).left,
          formatDate = d3.time.format('%b %d');


        // Create SVG
        // ------------------------------

        // Container
        var container = d3Container.append('svg');

        // SVG element
        var svg = container
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')



        // Construct chart layout
        // ------------------------------

        // Area
        var area = d3.svg.area()
          .x((d) => { return x(d.date); })
          .y0(height)
          .y1((d) => { return y(d.value); })
          .interpolate('monotone')


        // Construct scales
        // ------------------------------

        // Horizontal
        var x = d3.time.scale().range([0, width]);

        // Vertical
        var y = d3.scale.linear().range([height, 0]);


        // Create axes
        // ------------------------------

        // Horizontal
        var xAxis = d3.svg.axis()
          .scale(x)
          .orient('bottom')
          .ticks(d3.time.days, 6)
          .innerTickSize(4)
          .tickPadding(8)
          .tickFormat(d3.time.format('%b %d'));


        // Load data
        // ------------------------------

        d3.json('assets/json/monthly_sales.json', (error, data) => {

          // Show what's wrong if error
          if (error) return console.error(error);

          // Pull out values
          data.forEach((d) => {
            d.date = parseDate(d.date);
            d.value = +d.value;
          });

          // Get the maximum value in the given array
          var maxY = d3.max(data, (d) => { return d.value; });

          // Reset start data for animation
          var startData = data.map((datum) => {
            return {
              date: datum.date,
              value: 0
            };
          });


          // Set input domains
          // ------------------------------

          // Horizontal
          x.domain(d3.extent(data, (d, i) => { return d.date; }));

          // Vertical
          y.domain([0, d3.max(data, (d) => { return d.value; })]);



          //
          // Append chart elements
          //

          // Append axes
          // -------------------------

          // Horizontal
          var horizontalAxis = svg.append('g')
            .attr('class', 'd3-axis d3-axis-horizontal d3-axis-solid')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis);

          // Add extra subticks for hidden hours
          horizontalAxis.selectAll('.d3-axis-subticks')
            .data(x.ticks(d3.time.days), (d) => { return d; })
            .enter()
            .append('line')
            .attr('class', 'd3-axis-subticks')
            .attr('y1', 0)
            .attr('y2', 4)
            .attr('x1', x)
            .attr('x2', x);



          // Append area
          // -------------------------

          // Add area path
          svg.append('path')
            .datum(data)
            .attr('class', 'd3-area')
            .attr('d', area)
            .style('fill', color)
            .transition() // begin animation
            .duration(1000)
            .attrTween('d', () => {
              var interpolator = d3.interpolateArray(startData, data);
              return (t) => {
                return area(interpolator(t));
              }
            });



          // Append crosshair and tooltip
          // -------------------------

          //
          // Line
          //

          // Line group
          var focusLine = svg.append('g')
            .attr('class', 'd3-crosshair-line')
            .style('display', 'none');

          // Line element
          focusLine.append('line')
            .attr('class', 'vertical-crosshair')
            .attr('y1', 0)
            .attr('y2', -maxY)
            .style('stroke', '#e5e5e5')
            .style('shape-rendering', 'crispEdges')


          //
          // Pointer
          //

          // Pointer group
          var focusPointer = svg.append('g')
            .attr('class', 'd3-crosshair-pointer')
            .style('display', 'none');

          // Pointer element
          focusPointer.append('circle')
            .attr('r', 3)
            .style('fill', '#fff')
            .style('stroke', color)
            .style('stroke-width', 1)


          //
          // Text
          //

          // Text group
          var focusText = svg.append('g')
            .attr('class', 'd3-crosshair-text')
            .style('display', 'none');

          // Text element
          focusText.append('text')
            .attr('dy', -10)
            .style('font-size', 12);


          // Display tooltip on mousemove
          var mousemove = () => {

            // Define main variables
            var mouse = d3.mouse(this),
              mousex = mouse[0],
              mousey = mouse[1],
              x0 = x.invert(mousex),
              i = bisectDate(data, x0),
              d0 = data[i - 1],
              d1 = data[i],
              d = x0 - d0.date > d1.date - x0 ? d1 : d0;

            // Move line
            focusLine.attr('transform', 'translate(' + x(d.date) + ',' + height + ')');

            // Move pointer
            focusPointer.attr('transform', 'translate(' + x(d.date) + ',' + y(d.value) + ')');

            // Reverse tooltip at the end point
            if (mousex >= (d3Container.node().getBoundingClientRect().width - focusText.select('text').node().getBoundingClientRect().width - margin.right - margin.left)) {
              focusText.select('text').attr('text-anchor', 'end').attr('x', function () { return (x(d.date) - 15) + 'px' }).text(formatDate(d.date) + ' - ' + d.value + ' sales');
            }
            else {
              focusText.select('text').attr('text-anchor', 'start').attr('x', function () { return (x(d.date) + 15) + 'px' }).text(formatDate(d.date) + ' - ' + d.value + ' sales');
            }
          }

          //
          // Overlay with events
          //

          svg.append('rect')
            .attr('class', 'd3-crosshair-overlay')
            .style('fill', 'none')
            .style('pointer-events', 'all')
            .attr('width', width)
            .attr('height', height)
            .on('mouseover', () => {
              focusPointer.style('display', null);
              focusLine.style('display', null)
              focusText.style('display', null);
            })
            .on('mouseout', () => {
              focusPointer.style('display', 'none');
              focusLine.style('display', 'none');
              focusText.style('display', 'none');
            })
            .on('mousemove', mousemove);




          // Resize function
          //
          // Since D3 doesn't support SVG resize by default,
          // we need to manually specify parts of the graph that need to
          // be updated on window resize
          var monthlySalesAreaResize = () => {

            // Layout variables
            width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


            // Layout
            // -------------------------

            // Main svg width
            container.attr('width', width + margin.left + margin.right);

            // Width of appended group
            svg.attr('width', width + margin.left + margin.right);


            // Axes
            // -------------------------

            // Horizontal range
            x.range([0, width]);

            // Horizontal axis
            svg.selectAll('.d3-axis-horizontal').call(xAxis);

            // Horizontal axis subticks
            svg.selectAll('.d3-axis-subticks').attr('x1', x).attr('x2', x);


            // Chart elements
            // -------------------------

            // Area path
            svg.selectAll('.d3-area').datum(data).attr('d', area);

            // Crosshair
            svg.selectAll('.d3-crosshair-overlay').attr('width', width);
          }

          // Resize chart
          // ------------------------------

          // Call function on window resize
          $(window).on('resize', monthlySalesAreaResize);

          // Call function on sidebar width change
          $(document).on('click', '.sidebar-control', monthlySalesAreaResize);


        });
      }
    };

    _MonthlySalesAreaChart('#monthly-sales-stats', 100, '#4DB6AC');

    // this.lineChart();
  }

  lineChart() {
    // App sales line chart
    var _AppSalesLinesChart = function (element, h: any) {
      if (typeof d3 == 'undefined' || typeof d3.tip == 'undefined') {
        console.warn('Warning - d3.min.js is not loaded.');
        return;
      }

      // Initialize chart only if element exsists in the DOM
      if ($(element).length > 0) {


        // Basic setup
        // ------------------------------

        // Define main variables
        var d3Container = d3.select(element);
        let margin = { top: 5, right: 30, bottom: 30, left: 50 };
        let width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;
        let height: any = h - margin.top - margin.bottom;

        // Tooltip
        var formatted;
        var tooltip = d3.tip()
          .attr('class', 'd3-tip')
          .html(function (d) {
            return '<ul class="list-unstyled mb-1">' +
              '<li>' + '<div class="font-size-base my-1"><i class="icon-circle-left2 mr-2"></i>' + d.name + ' app' + '</div>' + '</li>' +
              '<li>' + 'Sales: &nbsp;' + '<span class="font-weight-semibold float-right">' + d.value + '</span>' + '</li>' +
              '<li>' + 'Revenue: &nbsp; ' + '<span class="font-weight-semibold float-right">' + '$' + (d.value * 25).toFixed(2) + '</span>' + '</li>' +
              '</ul>';
          });

        // Format date
        var parseDate = d3.time.format('%Y/%m/%d').parse,
          formatDate = d3.time.format('%b %d, %y');

        // Line colors
        var scale = ['#4CAF50', '#FF5722', '#5C6BC0'],
          color = d3.scale.ordinal().range(scale);


        // Create chart
        // ------------------------------

        // Container
        var container = d3Container.append('svg');

        // SVG element
        var svg = container
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
          .call(tooltip);



        // Add date range switcher
        // ------------------------------

        // Menu
        var menu = $('#select_date').multiselect({
          buttonClass: 'text-default font-weight-semibold bg-transparent border-0 cursor-pointer outline-0 py-0 pl-0',
          enableHTML: true,
          dropRight: $('html').attr('dir') == 'rtl' ? false : true,
          onChange: function () {
            change();
          },
          buttonText: function (options, element) {
            var selected = '';
            options.each(function () {
              selected += $(this).html() + ', ';
            });
            return '<span class="badge badge-mark border-warning mr-2"></span>' + selected.substr(0, selected.length - 2);
          }
        });



        // Load data
        // ------------------------------

        d3.csv('assets/json/app_sales.csv', function (error, data) {
          formatted = data;
          redraw();
        });


        // Construct layout
        // ------------------------------

        // Add events
        var altKey;
        d3.select(window)
          .on('keydown', function () { altKey = d3.event.altKey; })
          .on('keyup', function () { altKey = false; });

        // Set terms of transition on date change
        let change = () => {
          d3.transition()
            .duration(altKey ? 7500 : 500)
            .each(redraw);
        }



        // Main chart drawing function
        // ------------------------------

        let redraw = () => {

          // Construct chart layout
          // ------------------------------

          // Create data nests
          var nested = d3.nest()
            .key((d) => { return d.type; })
            .map(formatted)

          // Get value from menu selection
          // the option values correspond
          //to the [type] value we used to nest the data
          var series = menu.val();

          // Only retrieve data from the selected series using nest
          var data = nested[series];

          // For object constancy we will need to set 'keys', one for each type of data (column name) exclude all others.
          color.domain(d3.keys(data[0]).filter((key) => { return (key !== 'date' && key !== 'type'); }));

          // Setting up color map
          var linedata = color.domain().map((name) => {
            return {
              name: name,
              values: data.map((d) => {
                return { name: name, date: parseDate(d.date), value: parseFloat(d[name]) };
              })
            };
          });

          // Draw the line
          var line = d3.svg.line()
            .x((d) => { return x(d.date); })
            .y((d) => { return y(d.value); })
            .interpolate('cardinal');



          // Construct scales
          // ------------------------------

          // Horizontal
          var x = d3.time.scale()
            .domain([
              d3.min(linedata, (c) => { return d3.min(c.values, (v) => { return v.date; }); }),
              d3.max(linedata, (c) => { return d3.max(c.values, (v) => { return v.date; }); })
            ])
            .range([0, width]);

          // Vertical
          var y = d3.scale.linear()
            .domain([
              d3.min(linedata, (c) => { return d3.min(c.values, (v) => { return v.value; }); }),
              d3.max(linedata, (c) => { return d3.max(c.values, (v) => { return v.value; }); })
            ])
            .range([height, 0]);



          // Create axes
          // ------------------------------

          // Horizontal
          var xAxis = d3.svg.axis()
            .scale(x)
            .orient('bottom')
            .tickPadding(8)
            .ticks(d3.time.days)
            .innerTickSize(4)
            .tickFormat(d3.time.format('%a')); // Display hours and minutes in 24h format

          // Vertical
          var yAxis = d3.svg.axis()
            .scale(y)
            .orient('left')
            .ticks(6)
            .tickSize(0 - width)
            .tickPadding(8);



          //
          // Append chart elements
          //

          // Append axes
          // ------------------------------

          // Horizontal
          svg.append('g')
            .attr('class', 'd3-axis d3-axis-horizontal d3-axis-solid')
            .attr('transform', 'translate(0,' + height + ')');

          // Vertical
          svg.append('g')
            .attr('class', 'd3-axis d3-axis-vertical d3-axis-transparent');



          // Append lines
          // ------------------------------

          // Bind the data
          var lines = svg.selectAll('.lines')
            .data(linedata)

          // Append a group tag for each line
          var lineGroup = lines
            .enter()
            .append('g')
            .attr('class', 'lines')
            .attr('id', function (d) { return d.name + '-line'; });

          // Append the line to the graph
          lineGroup.append('path')
            .attr('class', 'd3-line d3-line-medium')
            .style('stroke', function (d) { return color(d.name); })
            .style('opacity', 0)
            .attr('d', function (d) { return line(d.values[0]); })
            .transition()
            .duration(500)
            .delay(function (d, i) { return i * 200; })
            .style('opacity', 1);



          // Append circles
          // ------------------------------

          var circles = lines.selectAll('circle')
            .data(function (d) { return d.values; })
            .enter()
            .append('circle')
            .attr('class', 'd3-line-circle d3-line-circle-medium')
            .attr('cx', function (d, i) { return x(d.date) })
            .attr('cy', function (d, i) { return y(d.value) })
            .attr('r', 3)
            .style('fill', '#fff')
            .style('stroke', function (d) { return color(d.name); });

          // Add transition
          circles
            .style('opacity', 0)
            .transition()
            .duration(500)
            .delay(500)
            .style('opacity', 1);



          // Append tooltip
          // ------------------------------

          // Add tooltip on circle hover
          circles
            .on('mouseover', function (d) {
              tooltip.offset([-15, 0]).show(d);

              // Animate circle radius
              d3.select(this).transition().duration(250).attr('r', 4);
            })
            .on('mouseout', function (d) {
              tooltip.hide(d);

              // Animate circle radius
              d3.select(this).transition().duration(250).attr('r', 3);
            });

          // Change tooltip direction of first point
          // to always keep it inside chart, useful on mobiles
          lines.each(function (d) {
            d3.select(d3.select(this).selectAll('circle')[0][0])
              .on('mouseover', function (d) {
                tooltip.offset([0, 15]).direction('e').show(d);

                // Animate circle radius
                d3.select(this).transition().duration(250).attr('r', 4);
              })
              .on('mouseout', function (d) {
                tooltip.direction('n').hide(d);

                // Animate circle radius
                d3.select(this).transition().duration(250).attr('r', 3);
              });
          })

          // Change tooltip direction of last point
          // to always keep it inside chart, useful on mobiles
          lines.each(function (d) {
            d3.select(d3.select(this).selectAll('circle')[0][d3.select(this).selectAll('circle').size() - 1])
              .on('mouseover', function (d) {
                tooltip.offset([0, -15]).direction('w').show(d);

                // Animate circle radius
                d3.select(this).transition().duration(250).attr('r', 4);
              })
              .on('mouseout', function (d) {
                tooltip.direction('n').hide(d);

                // Animate circle radius
                d3.select(this).transition().duration(250).attr('r', 3);
              })
          })



          // Update chart on date change
          // ------------------------------

          // Set variable for updating visualization
          var lineUpdate = d3.transition(lines);

          // Update lines
          lineUpdate.select('path')
            .attr('d', function (d, i) { return line(d.values); });

          // Update circles
          lineUpdate.selectAll('circle')
            .attr('cy', function (d, i) { return y(d.value) })
            .attr('cx', function (d, i) { return x(d.date) });

          // Update vertical axes
          d3.transition(svg)
            .select('.d3-axis-vertical')
            .call(yAxis);

          // Update horizontal axes
          d3.transition(svg)
            .select('.d3-axis-horizontal')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis);



          // Resize chart
          // ------------------------------

          // Call function on window resize
          $(window).on('resize', appSalesResize);

          // Call function on sidebar width change
          $(document).on('click', '.sidebar-control', appSalesResize);

          // Resize function
          //
          // Since D3 doesn't support SVG resize by default,
          // we need to manually specify parts of the graph that need to
          // be updated on window resize
          function appSalesResize() {

            // Layout
            // -------------------------

            // Define width
            width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;

            // Main svg width
            container.attr('width', width + margin.left + margin.right);

            // Width of appended group
            svg.attr('width', width + margin.left + margin.right);

            // Horizontal range
            x.range([0, width]);

            // Vertical range
            y.range([height, 0]);


            // Chart elements
            // -------------------------

            // Horizontal axis
            svg.select('.d3-axis-horizontal').call(xAxis);

            // Vertical axis
            svg.select('.d3-axis-vertical').call(yAxis.tickSize(0 - width));

            // Lines
            svg.selectAll('.d3-line').attr('d', function (d, i) { return line(d.values); });

            // Circles
            svg.selectAll('.d3-line-circle').attr('cx', function (d, i) { return x(d.date) })
          }
        }
      }
    };

    _AppSalesLinesChart('#app_sales', 255);
  }

}
