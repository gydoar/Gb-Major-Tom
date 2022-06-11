import { registerBlockType } from '@wordpress/blocks';
import './style.scss';


import Edit from './edit';
import save from './save';
import metadata from './block.json';


registerBlockType(metadata.name, {
	icon: {
		src: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 64.01v384c0 17.67-14.31 32-32 32s-32-14.33-32-32V169.7l-133.4 200.1c-11.88 17.81-41.38 17.81-53.25 0L64 169.7v278.3c0 17.67-14.31 32-32 32s-32-14.33-32-32v-384c0-14.09 9.219-26.55 22.72-30.63c13.47-4.156 28.09 1.141 35.91 12.88L224 294.3l165.4-248.1c7.812-11.73 22.47-17.03 35.91-12.88C438.8 37.47 448 49.92 448 64.01z"/></svg>),
		background: '#F0E77B',
		foreground:'#000000',
	},
	
	attributes: {
		heading1: {
			type: 'string',
			source: 'html',
			selector: 'h5',
		},
		heading2: {
			type: 'string',
			source: 'html',
			selector: 'h2',
		},
		paragraph: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save,
});
