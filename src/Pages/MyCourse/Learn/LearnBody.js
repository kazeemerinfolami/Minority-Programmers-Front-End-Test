import React from 'react'
import { CourseFilter } from '../../../Data/Data'

function LearnBody() {
    return (
        <div>
            <div>
                <div className="Learn-searchArea-wrapper">
                    <div className="Learn-searchArea">
                        <input type="search" placeholder="What event are you looking for?" />
                        <span className="iconify Learn-search-icon" data-icon="jam:search" data-inline="false"></span>
                    </div>
                    <div>
                        <select name="pageNum" id="pageNum">
                            {CourseFilter.map((D) => (
                                <option value="1" key={D.key}>{D.title}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnBody
