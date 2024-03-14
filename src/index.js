// dataVisualization.js

class DataVisualization {
    constructor(data, options) {
      this.data = data;
      this.options = options;
    }
  
    renderBarChart() {
      const { width, height, colors } = this.options;
  
      const chartContainer = document.createElement('div');
      chartContainer.style.width = width + 'px';
      chartContainer.style.height = height + 'px';
      chartContainer.style.border = '1px solid #ccc';
      chartContainer.style.padding = '10px';
      chartContainer.style.boxSizing = 'border-box';
  
      this.data.forEach((item, index) => {
        const bar = document.createElement('div');
        bar.style.width = (item * 10) + 'px'; // Scale the bar width
        bar.style.height = '30px';
        bar.style.backgroundColor = colors[index % colors.length];
        bar.style.marginBottom = '5px';
        bar.innerText = item;
  
        chartContainer.appendChild(bar);
      });
  
      document.body.appendChild(chartContainer);
    }
  }
  
  module.exports = DataVisualization;
  