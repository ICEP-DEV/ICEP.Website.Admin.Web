import './SanitaryInpection.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SamplingData()

useEffect(()=>{
    navigator.geolocation.getCurrentPosition(position =>{
        const { latitude, longitude} = position.coords;
        console.log(latitude, longitude )
    })
})


return (
    <div className='samplingData'>
        <div className='form-group'>
            <select>
                <option value='' className="control-form">---Select---</option>
                <option value='River' className="control-form">River</option>
                <option value='Dam' className="control-form">Dam</option>
                <option value='Spring' className="control-form">Spring</option>
                <option value='Borehole' className="control-form">Borehole</option>
                <option value='Dug Well' className="control-form">Dug Well</option>
                <option value='Household Tap Water' className="control-form">Household Tap Water</option>
                <option value='Housewater Stored Water' className="control-form">Housewater Stored Water</option>
                <option value='Wastewater Treatment Plant' className="control-form">Wastewater Treatment Plant</option>
                <option value='water Treatment Plant' className="control-form">water Treatment Plant</option>
            </select>
        </div>
        <div className='form-group'>
            <fieldset>
                <legend>Sampling Dta</legend>
                <div>
                    <label>Sampling Date</label>
                    <input type='date' />
                </div>
                <div>
                    <label>Sampling Date</label>
                    <input type='text' />
                </div>
                <div>
                    <label>Weather Condition</label>
                    <select>
                        <option value='' className="control-form">---Select---</option>
                        <option value='Dry' className="control-form">Dry</option>
                        <option value='Windy' className="control-form">Windy</option>
                        <option value='cloudy' className="control-form">cloudy</option>
                        <option value='Snow' className="control-form">Snow</option>
                        <option value='Thunder and Lightning' className="control-form">Thunder and Lightning</option>
                        <option value='Frost and Ice' className="control-form">Frost and Ice</option>
                        <option value='Rainy' className="control-form">Rainy</option>
                        <option value='Fog' className="control-form">Fog</option>
                        <option value='Sunny' className="control-form">Sunny</option>
                    </select>
                </div>
            </fieldset>
        </div>
    </div>
);


export default SamplingData