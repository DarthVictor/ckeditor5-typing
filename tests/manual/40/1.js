/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* globals console:false, document, window */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Enter from '@ckeditor/ckeditor5-enter/src/enter';
import Typing from '../../../src/typing';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';

ClassicEditor
	.create( document.querySelector( '#editor' ), {
		plugins: [ Enter, Typing, Heading ],
		toolbar: [ 'headings' ]
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );
