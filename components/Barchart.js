/**
  Use:

  import Barchart from 'components/barchart'
  <Barchart>
    1. MIT: **4 107** personnes
    2. Apache-2: **1 761** personnes
    3. GPL-3: **1 238** personnes
    4. GPL-2: **471** personnes
    5. BSD-3-Clause: **526** personnes
    6. BSD-2-Clause: **240** personnes
    7. AGPL-3: **214** personnes
    </Barchart>
*/

 import React, { Component } from 'react'
import VegaLite from 'react-vega-lite'



const spec = {
  width: 500,
  height: 500,
  mark: 'bar',
  encoding: {
    color: { field: 'label', type: 'nominal' },
    x: { field: 'label', type: 'nominal' },
    y: { field: 'personnes', type: 'quantitative' }
  }
}

class Barchart extends Component {
  constructor (props) {
    super(props)
    const re = /([1-9]\. .+?): \*\*(.+?)\*\* (.*?)\s/g

    this.barData = []
    let oy
    let personnes
    while (oy = re.exec(props.children + ' ')) {
      let [zzz, label, personnesImp, word] = oy
      personnes = parseInt(personnesImp.replace(/\s/, ''), 10)
      this.barData.push({ label, personnes, personnesImp, word })
    }

    this.list = (
      <ol style={{ textAlign: 'left', fontSize: '1.5em' }}>
        {this.barData.map(({ label, personnesImp, word }) => (
          <li key={label}>{label.slice(2)}: <b>{personnesImp}</b> {word}</li>
        ))}
      </ol>
    )

    this.state = {
      graphic: true
    }
    this.click = this.click.bind(this)
  }

  click () {
    this.setState({ graphic: !this.state.graphic })
  }

  render () {
    return (
      <div style={{ cursor: 'pointer' }} onClick={this.click}>
        {this.state.graphic ? <VegaLite spec={spec} data={{values: this.barData}} /> : this.list}
      </div>
    )
  }
}

export default Barchart
