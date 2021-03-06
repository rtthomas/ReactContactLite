import React, {Component} from 'react';

/**
 * A high order component providing a method to build the option sets for selectors
 * displayed in a ResponsiveForm 
 * @param {object} WrappedComponent 
 */
export default function withOptionSets(WrappedComponent){
    
    return class extends Component{

        constructor(props){
            super(props)
            this.state = {
                buildOptionSets: this.buildOptionSets
            }
        }

        /**
         * Assembles the set of selector option sets
         * @param {} defs 
         */
        buildOptionSets(defs){
            const optionSets = {}
            defs.forEach( def => {
                let options = []
                def.entityList.forEach( entity => {
                    options.push({label: entity[def.mappedAttribute], value: entity._id})
                })
               optionSets[def.type] = options
            })
            return optionSets
        }

        render(){
            return (
                <div>
                    <WrappedComponent {...this.state} {...this.props}/>
                </div>
            );
        }
    } 
}

