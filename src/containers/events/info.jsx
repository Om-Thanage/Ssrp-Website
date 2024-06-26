import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';

export default function Info() { 
return ( 
	<div className='Carousel'> 
	<Carousel> 
		<Carousel.Item interval={1000}> 
		<img className="d-block w-100" src='/assets/images/about_images/Collaborators/kjsit image 1.jpg' alt="Image One"/>  
		</Carousel.Item> 
		<Carousel.Item interval={1000}> 
		<img className="d-block w-100" src='/assets/images/about_images/Collaborators/kjsit image 1.jpg' alt="KJSIT"/> 
		</Carousel.Item> 
	</Carousel> 
	</div> 
); 
}