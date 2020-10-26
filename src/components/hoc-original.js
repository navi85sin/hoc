import React from 'react';

const UpdatedComponent = OriginalComponent =>  {
    class NewComponent extends React.Component {
        
        constructor(props) {
            super(props);
            this.state = {count: 0};
          }
        updateCounter = () => {
            this.setState({
                count : this.state.count + 1}
                );
                console.log(this.state);
        }
        render() {

            return (
                <div>
                      <OriginalComponent name={"hoc nav"} count= {this.state.count} updateCounter={this.updateCounter}/>
                </div>
            );
        }
    }
    return  NewComponent;
}

export default UpdatedComponent;