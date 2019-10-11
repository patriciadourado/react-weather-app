import React from "react";
import { VictoryChart,VictoryLine,VictoryScatter,VictoryAxis,VictoryLabel} from 'victory';

class LineChart extends React.Component{
	render(){
		return(
			<div className="container-chart">
				<VictoryChart>
					<VictoryLabel text={this.props.city} x={225} y={10} textAnchor="middle"/>
					<g transform={"scale(1.0)"}>
						<VictoryAxis 
							standalone={false} 
							label="Sample" 
							domain={{ x: [0,40]}}/>
						<VictoryAxis dependentAxis 
							standalone={false} 
							domain={{y: [this.props.t_min,this.props.t_max] }} 
							label="Temperature" 
							style={{tickLabels: { angle: 90 }}}/>
						<VictoryScatter
							standalone={false}
							data = {this.props.forecast}	
							labels={({ datum }) => datum.y}
							labelComponent={<VictoryLabel dy={8}/>}
							size={1}
							scale={{x: "linear", y: "linear"}}
							style={{ border: { stroke: "none" }, labels: { fontSize: 6 } }}
						/>
					</g>
				</VictoryChart>
					<VictoryChart>
						<VictoryLabel text={this.props.city} x={225} y={10} textAnchor="middle" />
						<VictoryAxis 
						standalone={false} 
						label="Sample" 
						domain={{ x: [0,40]}}/>
						<VictoryLine data = {this.props.forecast}
						/>
					<VictoryAxis dependentAxis 
						standalone={false} 
						domain={{y: [this.props.t_min,this.props.t_max] }} 
						label="Temperature" 
						style={{tickLabels: { angle: 90 }}}/>
					</VictoryChart>
			</div>
		);
	}
	
}

export default LineChart;