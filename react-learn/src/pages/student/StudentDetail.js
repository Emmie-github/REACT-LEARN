import React from 'react'

/**学生详情页 */
export default function StudentDetail(props) {
    return (
        <div>
            <h1>学生详情页</h1>
            <h1>学号:{props.match.params.sNo} </h1>
        </div>
    )
}
