import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect'
import { selectDirectorySection} from '../../redux/directory/directory.selectors.js'

import MenuItem from '../menu-component/menu-item';
import './directory-componet.scss';

const  Directory =({sections}) =>( 
        <div className='directory-menu'>
        {sections.map(({id, ...otherSectionProps})=>(
            <MenuItem key={id} {...otherSectionProps}/>
        ))}
        </div>
)
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);