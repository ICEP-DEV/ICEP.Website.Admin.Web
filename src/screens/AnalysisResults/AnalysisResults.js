import { useEffect, useState } from 'react';
import './AnalysisResults.css'
import { useNavigate, useLocation } from 'react-router-dom';

function DataResults() {
    const tempData = useLocation()
    console.log(tempData.state.temp)
    const [DataAnalysis] = useState(tempData.state.temp)
    const [backgroundColor,setbackgroundColor] = useState('')

    useEffect(()=>{
        if(DataAnalysis.total_avarage <26){setbackgroundColor("rgba(0, 128, 0, 0.719)")}
        else if(DataAnalysis.total_avarage >25 && DataAnalysis.total_avarage < 51){setbackgroundColor("rgba(255, 255, 0, 0.733)")}
        else if(DataAnalysis.total_avarage >50 && DataAnalysis.total_avarage < 76){setbackgroundColor("rgb(201, 199, 105)")}
        else {setbackgroundColor("rgba(216, 0, 0, 0.986)")}
    })
//risk_typ
    let sanitary = <div>

    </div>;
    return (

        <div className='AnalysisResults'>
            <h2>Analysis: Sanitary</h2>
            <h3>Risk Characterization</h3>
                <div className='form-group'>
                    <label>{DataAnalysis.risk_type}</label>
                    <input type='text' className='low_risk risk_parce' style={{backgroundColor: backgroundColor}} disabled />
                </div>
            {/* <div>
                <h3>Risk Characterization</h3>
                <div className='form-group'>
                    <label>Low Risk</label>
                    <input type='text' className='low_risk risk_parce' disabled />
                </div>
                <div className='form-group'>
                    <label> Medium Risk</label>
                    <input type='text' className='medium_risk risk_parce' disabled />
                </div>
                <div className='form-group'>
                    <label> High Risk</label>
                    <input type='text' className='high_risk risk_parce' disabled />
                </div>
                <div className='form-group'>
                    <label> Very High Risk</label>
                    <input type='text' className='very_high_risk risk_parce' disabled />
                </div>
            </div>

            <h2>Analysis: H2S</h2>
            <div className='form-group'>
                <label>Negative (No Risk) </label>
                <input type='text' className='no_risk risk_parce' disabled />
            </div>
            <div className='form-group'>
                <label>positive (Risk) </label>
                <input type='text' className='yes_risk risk_parce' disabled />
            </div> */}
        </div>
    )
}

export default DataResults