import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ViewItem, LineText, FakeImage } from '../styles/styles';

const ContentItem = (props) => {

    const { name, img, desc, id } = props;

    function renderImg(img) {
        if(img) {
           return <FakeImage source={{uri: img}}/>

        } else {
            return <FakeImage/>

    }
    return(
        <TouchableOpacity>
            <ViewItem/>
            {renderImg(img)}
                <FakeImage></FakeImage>
                <LineText fontSize="20px">{ name }</LineText>
            <ViewItem/>

        </TouchableOpacity>
    )
}

export default ContentItem;