import { Component } from "react"
import "./SkillGraph.css"
class SkillGraph extends Component {
    state = {
      data: [
        { name: 'Mon', value: 95 , color: "green"},
        { name: 'Tue', value: 90,  color: "green" },
        { name: 'Wed', value: 75,   color: "green"},
        { name: 'Thu', value: 50,   color: "yellow"},
        { name: 'Fri', value: 50,   color: "yellow"},
        { name: 'Sat', value: 30,   color: "red"},
        { name: 'Sun', value: 30,   color: "red"}
      ]
    }
    render() {
    let barHeight = 25;
    let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
    <BarGroup d={d} barHeight={barHeight} />
      </g>)
      return <svg width="800" height="300" >
        <g className="bar-container">
            {barGroups}
        </g>
      </svg>
    }
  }
  function BarGroup(props) {
    let barPadding = 2
    let barColour = props.d.color;
    let widthScale = d => d * 10
  
    let width = widthScale(props.d.value)
    let yMid = props.barHeight * 0.5
  
    return <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle">{props.d.name}</text>
      <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
      <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle">{props.d.value}</text>
    </g>
  }

  export default SkillGraph;