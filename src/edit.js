import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';
export default function Edit({attributes, setAttributes}) {

	const { heading1, heading2, paragraph } = attributes;
	const onChangeHeading1 = ( newHeading1 ) => {
		setAttributes({heading1:newHeading1 });
	};
	const onChangeHeading2 = (  newHeading2 ) => {
		setAttributes({heading2:newHeading2 });
	};
	const onChangeParagraph = (  newParagraph ) => {
		setAttributes({paragraph:newParagraph });
	};
	return (
		<div {...useBlockProps()}>
			<RichText 
				placeholder={__("This is lorem")}
				tagName="h5"
				onChange={onChangeHeading1}
				value={ heading1}
				allowedFormats={[]}
			/>
			<RichText 
				placeholder={__("Introduction Header")}
				tagName="h2"
				onChange={onChangeHeading2}
				value={heading2}
				allowedFormats={[]}
			/>
			<RichText 
				placeholder={__("Paragraph...")}
				tagName="p"
				onChange={onChangeParagraph}
				value={paragraph}
				allowedFormats={[]}
			/>
		</div>
	);
}
