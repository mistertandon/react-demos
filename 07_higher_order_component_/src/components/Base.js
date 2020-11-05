import React from 'react';

import OnHover from './OnHover';
import OnClick from './OnClick'

const Base = () => {

    return (
        <div className="base">

            <OnHover class="on_hover_cmp" />
            <OnClick class="on_click_cmp" />

        </div>
    )
}

export default Base;