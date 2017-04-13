
// Below are templates to render a list of items for ReactJS with 2 components:
// list.js & list_item.js
// These would need to be imported into the src/app
//    assumes (1) items have key, (2) state & props have properly been defined
//    (3) onItemSelect is defined

// **********************************************************

// list.js

// **********************************************************
import React from 'react';
import ListItem from './list_item';


const List = (props) => {
	const Items = props.list.map((list) => {
		return <ListItem 
				  onItemSelect={props.onItemSelect}
				  key={item.key} 
				  item={item} />
	}); 

	return (
		<ul className="col-md-4 list-group">
			{Items}
		</ul>
		);
	};


export default List;

// **********************************************************

// list_items.js

// **********************************************************
import React from 'react';

const ListItem = ({list, onItemSelect}) => {


	return(

		<li onClick={() => onItemSelect(list)} className=" list-group-item">
			<div className="item-list media">
				<div className="image-left">
					<img className="image-object" src=(url) />
				</div>

				<div className="image-body">
					<div className="image-heading">{item.key}</div>
				</div>				


			</div>
		</li>

		)


	return 	<li>Item</li>;
};

export default ListItem;