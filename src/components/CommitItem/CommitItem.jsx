import React from 'react';
import Moment from 'react-moment';

// STYLE
import './CommitItem.scss';

function CommitItem(props) {
	const { date, commit } = props;

	return (
		<p className="CommitItem">
			<span className="CommitItem__date">
				<Moment format="DD-MMM-YYYY (HH:mm)">{date}</Moment>
			</span>
			{commit}
		</p>
	);
}

export { CommitItem };
