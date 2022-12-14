import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import StylishButton from './StylishButton';

const AlbumDetail = (props) => {
	const { title, artist, thumbnail_image, image, url } = props.album;
	const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;

	return (
		<Card>
			<CardSection>
			<View style={thumbnailContainerStyle}>
				<Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />			
			</View>
			<View style={headerContentStyle}>
				<Text style={headerTextStyle}>
				{ title }
				</Text>
				<Text>
				{ artist }
				</Text>
			</View>
			</CardSection>

			<CardSection>
				<Image style={imageStyle} source={{ uri: image }} />
			</CardSection>	
			
			<CardSection>
				<StylishButton u={url}>
					Buy Now
				</StylishButton>
			</CardSection>
		</Card>
		);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'

	},

	headerTextStyle: {
		fontSize: 18
	},

	thumbnailStyle: {
		height: 50,
		width: 50
	},

	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},

	imageStyle: {
		height: 300,
		flex: 1,
		width: null 
	}
};

export default AlbumDetail;
