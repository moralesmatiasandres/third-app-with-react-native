import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './reutilizables';
import * as actions from '../acciones';
//import console = require('console');

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescripcion() {
        const { library, selectedLibraryId } = this.props;
        if (library.id === selectedLibraryId) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{library.description}</Text>
                </CardSection> 
            );
        }
    }
   
    render() {
        const { titleStyle } = styles; 
        const { id, title } = this.props.library;
        return (
           <TouchableWithoutFeedback
             onPress={() => this.props.selectLibrary(id)}
           > 
                <View>  
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescripcion()}
                </View>  
           </TouchableWithoutFeedback> 
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
};

const mapStateToProps = state => ({ selectedLibraryId: state.selectedLibraryId });

export default connect(mapStateToProps, actions)(ListItem);
