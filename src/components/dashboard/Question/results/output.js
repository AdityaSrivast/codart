import React, {Component} from 'react';

class Output extends Component {
    render() {
        return (
            <div className="testcase">
                    {/* <tr> */}
                    <p>Testcases</p>
                    <table  cellspacing="0" cellpadding="0">
                    {/* </tr> */}
                    <tr>
                        <td>Testcase 1</td>
                        <td>Tick/Cross</td>
                        <td>Time</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Output;
