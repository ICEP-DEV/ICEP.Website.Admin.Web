
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
function Level1() {
    const navigate = useNavigate()
    const tempdata = useLocation();
    const samplingData = useState(tempdata)

    function sanitary_survay(){
        var temp = samplingData[0].state.temp
        navigate('/sanitaryInpection', {state:{temp}})
    }
    function h2s(){

    }
    return(
        <div>
            <button onClick={sanitary_survay}>Sanitary Survey</button>
            <button onClick={h2s}>H2S</button>
        </div>
    )

}
export default Level1