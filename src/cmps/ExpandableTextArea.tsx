import React, { useRef } from 'react';

interface PropTypes {
	value: string;
	onChange: React.Dispatch<React.SetStateAction<string>>;
	placeholder: string;
}

const ExpandableTextarea = ({ value, onChange, placeholder }: PropTypes) => {
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);

	const handleInput = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
		onChange(ev.target.value);
		autoResize();
	};

	const autoResize = () => {
		const textarea = textareaRef.current;
		if (textarea) {
			textarea.style.height = 'auto'; // if no overflow (if making it smaller)
			textarea.style.height = `${textarea.scrollHeight}px`;
		}
	};

	return (
		<textarea
			ref={textareaRef}
			className="bg-transparent border-0 px-0 py-2 rounded-lg w-full focus:outline-none overflow-hidden resize-none max-h-[25dvh]"
			rows={1}
			placeholder={placeholder}
			value={value}
			onChange={handleInput}
		/>
	);
};

export default ExpandableTextarea;
