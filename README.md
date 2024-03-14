````markdown
# Data Visualization Package

Data Visualization Package is a simple Node.js package that provides functionality to create basic bar charts using HTML and CSS.

## Installation

You can install the package via npm:

```bash
npm install data-visualization-package
```

## Usage

```javascript
const DataVisualization = require('data-visualization-package');

// Sample data
const data = [10, 20, 30, 40, 50];

// Options for the bar chart
const options = {
  width: 300,
  height: 200,
  colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']
};

// Create an instance of DataVisualization
const dataVisualization = new DataVisualization(data, options);

// Render the bar chart
dataVisualization.renderBarChart();
```

## API

### `DataVisualization(data, options)`

The `DataVisualization` class provides functionality to render bar charts.

- `data` (Array): An array of numerical data points.
- `options` (Object): An object containing options for customizing the appearance of the bar chart.

#### `renderBarChart()`

Renders a bar chart based on the provided data and options.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
