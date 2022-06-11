import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({attributes, setAttributes}) {
	const { heading1, heading2, paragraph } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<RichText.Content tagName='h5' value={heading1} />
			<RichText.Content tagName='h2' value={heading2} />
			<RichText.Content tagName='p' value={paragraph} />
		</div>
	);
}
