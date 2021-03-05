import React, { Component } from 'react'

import MenuItem from '../menu-item/menu-item';

import './directory.scss';

export class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
  {
    title: 'surfboards',
    imageUrl: 'https://source.unsplash.com/XFMjz4X3hGs',
    id: 1,
    linkUrl: 'shop/surfboards'
  },
  {
    title: 'wakeboards',
    imageUrl: 'https://source.unsplash.com/xl4pRJPkclE',
    id: 2,
    linkUrl: 'shop/wakeboards'
  },
  {
    title: 'skateboards',
    imageUrl: 'https://source.unsplash.com/x_4q8AapBbk',
    id: 3,
    linkUrl: 'shop/skateboards'
  },
  {
    title: 'bikes',
    imageUrl: 'https://source.unsplash.com/pu40LpUjv5I',
    size: 'large',
    id: 4,
    linkUrl: 'shop/bikes'
  },
  {
    title: 'beach life',
    imageUrl: 'https://source.unsplash.com/SYx3UCHZJlo',
    size: 'large',
    id: 5,
    linkUrl: 'shop/beach life'
  }
]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...sectionProps}) => (
                        <MenuItem key={id} {...sectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory
