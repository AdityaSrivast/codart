import React, {Component} from 'react';
import { Done, Clear } from "@material-ui/icons";

class Output extends Component {
    render() {
        let results = this.props.results;
        let showResults = [], result;
        for(let i=0;i<results.length;i++) {
            result = results[i];
            showResults.push(
                <tr>
                    <td>{`Testcase${result.case}`}</td>
                    <td>{result.sucess?<Done style={{color: 'green'}}/>
                    :<Clear style={{color:'red'}} />}</td>
                </tr>
            )
        }
        return (
            <div className="submission">
                <p>Output</p>
                <table>
                <tr>
                    <th>Testcase</th>
                    <th>Result</th>
                </tr>
                {showResults}
                </table>
            </div>
        );
    }
}

export default Output;
