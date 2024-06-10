import { useState } from 'react';
import ExpandableTextarea from '../cmps/ExpandableTextArea';

const ChatIndex = () => {
	const [question, setQuestion] = useState<string>('');

	const onAskQuestion = async (ev: React.FormEvent) => {
		ev.preventDefault();
		if (!question) return;
	};

	return (
		<div>
			<form onSubmit={onAskQuestion}>
				<div className="flex gap-2 bg-gray-200 mx-auto mt-2 rounded-[26px] py-2 px-2 text-gray-700 focus:outline-none max-w-[48rem]">
					<ExpandableTextarea value={question} onChange={setQuestion} placeholder="Ask Judge Judi" />
					<button className="bg-primary text-white rounded-full px-4 py-2 self-center">Ask</button>
				</div>
			</form>
		</div>
	);
};

export default ChatIndex;
