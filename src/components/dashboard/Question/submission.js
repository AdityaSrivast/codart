import React, {Component} from 'react';

class Submission extends Component {
    render() {
        return (
            <div className="submission">
                    {/* <tr> */}
                    <p>My Submissions</p>
                    <table  cellspacing="0" cellpadding="0">
                    {/* </tr> */}
                    <tr>
                        <td>time</td>
                        <td>x/y</td>
                        <td>download</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Submission;
