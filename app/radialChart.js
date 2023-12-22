import './globals.css';
import {useState} from 'react';
import * as ReactDOM from 'react-dom/client';
// import { RadialGauge, Range } from '@grapecity/wijmo.react.gauge';
// import { InputNumber } from '@grapecity/wijmo.react.input';

const RadialChart = () => {
  const [state, setState] = useState({
    min: 0,
    max: 100,
    step: 5,
    value: 75,
    startAngle: 0,
    sweepAngle: 180,
    autoScale: true,
  });

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="form-group">
            <label htmlFor="value" className='labelInput'>Value:</label>
            <InputNumber
              id="value"
              min={state.min}
              max={state.max}
              step={state.step}
              value={state.value}
              valueChanged={(s) => setState((prev) => ({ ...prev, value: s.value }))}
              className='inputControl'
            />
          </div>

          <div className="form-group">
            <label htmlFor="startAngle">Start Angle:</label>
            <InputNumber
              id="startAngle"
              step={10}
              min={-360}
              max={360}
              value={state.startAngle}
              valueChanged={(s) => setState((prev) => ({ ...prev, startAngle: s.value }))}
              className='inputControl'
            />
          </div>

          <div className="form-group">
            <label htmlFor="sweepAngle">Sweep Angle:</label>
            <InputNumber
              id="sweepAngle"
              step={10}
              min={-360}
              max={360}
              value={state.sweepAngle}
              valueChanged={(s) => setState((prev) => ({ ...prev, sweepAngle: s.value }))}
              className='inputControl'
            />
          </div>

          <div className="form-check">
            <label htmlFor="autoScale" className="form-check-label">
              Auto Scale:
            </label>
            <input
              id="autoScale"
              type="checkbox"
              className="form-check-input"
              checked={state.autoScale}
              onChange={(e) => setState((prev) => ({ ...prev, autoScale: e.target.checked }))}
            //   id='inputControl'
            />
          </div>
        </div>

        <div>
          <div className="gauge-holder">
            <RadialGauge
              isReadOnly={false}
              min={state.min}
              max={state.max}
              step={state.step}
              value={state.value}
              showRanges={false}
              startAngle={state.startAngle}
              sweepAngle={state.sweepAngle}
              autoScale={state.autoScale}
              valueChanged={(s) => setState((prev) => ({ ...prev, value: s.value }))}
            >
              <Range min={0} max={33} color="red" />
              <Range min={33} max={66} color="yellow" />
              <Range min={66} max={100} color="green" />
            </RadialGauge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadialChart



