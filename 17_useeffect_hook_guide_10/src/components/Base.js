import React, { Fragment } from 'react';

import OnHover from './OnHover';
import OnClick from './OnClick'

const Base = () => {

    return (
        <div className="base">

            <div>
                <OnHover class="on_hover_cmp" />
            </div>
            <div>
                <OnClick class="on_click_cmp" />
            </div>


        </div>
    )
}

export default Base;