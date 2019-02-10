import React, {Component} from 'react';

class QuestionList extends Component {
    render() {
        return (
            <div className="submission">
                    {/* <tr> */}
                    <p>Questions List</p>
                    <table  cellSpacing="0" cellPadding="0">
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

export default QuestionList;
