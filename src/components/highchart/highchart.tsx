import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";

type HighchartProps = {
    type?: string,
    text?: string,
    data?: number[],
    isVisible: boolean
};

const Highchart = ({type='spline', text='hello', data, isVisible=false}: HighchartProps) => {
    const options = {
        chart: {
            type
        },
        title: {
            text: ''
        },
        series: [
            {
                name: text,
                data: data ? data : []
            }
        ]
    }

    return (
        <div 
            className={`highchart ${isVisible ? 'show' : 'hide'}`}>
            <HighchartsReact 
                highcharts={Highcharts}
                options={options}
                />
        </div>
    );
};

export default Highchart;